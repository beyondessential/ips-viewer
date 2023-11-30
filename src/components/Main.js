import React, { useEffect, useState } from "react";
import * as jose from "jose";
import { IPSResult } from "./IPSResult";
import { IPSForm } from "./IPSForm";
import { useIPS } from "../api/useIPS";
import { LoadingIndicator } from "./LoadingIndicator";

async function decryptData(key, encryptedData) {
  const decrypted = await jose.compactDecrypt(
    encryptedData,
    jose.base64url.decode(key)
  );

  const decryptedText = JSON.parse(decrypted.payload.toString('utf8'));

  console.log("decrypted", decrypted);
  console.log('decryptedText', decryptedText);
  
  return decrypted;
}

export const Main = () => {
  const [hasPayloadError, setHasPayloadError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [payload, setPayload] = useState(null);

  const hash = window.location.hash;
  const payloadBase64 = hash.replace("#shlink:/", "");

  const {
    data: ipsPayload,
    isLoading,
    isError: hasLoadIPSError,
  } = useIPS({ url: payload?.url });

  useEffect(() => {
    let payloadString;
    try {
      payloadString = atob(payloadBase64);
    } catch (e) {
      setHasPayloadError(true);
    }

    if (payloadString) {
      setPayload(JSON.parse(payloadString));
    }
  }, [payloadBase64]);

  useEffect(() => {
    if (ipsPayload) {
      console.log("payload", payload);
      decryptData(payload.key, ipsPayload);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipsPayload]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return validated ? (
    <IPSResult ipsPayload={ipsPayload} />
  ) : (
    <IPSForm
      hasError={hasLoadIPSError || hasPayloadError}
      ipsPayload={ipsPayload}
      onValidate={() => setValidated(true)}
    />
  );
};
