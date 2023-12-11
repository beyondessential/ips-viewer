import React, { useEffect, useState } from "react";
import * as jose from "jose";

import { IPSResult } from "./IPSResult";
import { IPSForm } from "./IPSForm";
import { useIPS } from "../api/useIPS";
import { LoadingIndicator } from "./LoadingIndicator";

export const Main = () => {
  const [hasPayloadError, setHasPayloadError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [payload, setPayload] = useState(null);
  const [ipsObject, setIpsObject] = useState(null);

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
      payloadString = jose.base64url.decode(payloadBase64);
    } catch (e) {
      setHasPayloadError(true);
    }

    if (payloadString) {
      setPayload(JSON.parse(payloadString));
    }
  }, [payloadBase64]);

  useEffect(() => {
    if (ipsPayload) {
      async function decryptData(key, encryptedData) {
        const decrypted = await jose.compactDecrypt(
          encryptedData,
          jose.base64url.decode(key)
        );

        const decryptedText = new TextDecoder().decode(decrypted.plaintext);
        setIpsObject(JSON.parse(decryptedText));
      }

      decryptData(payload.key, ipsPayload);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipsPayload]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return validated ? (
    <IPSResult ipsObject={ipsObject} />
  ) : (
    <IPSForm
      hasError={hasLoadIPSError || hasPayloadError}
      ipsObject={ipsObject}
      onValidate={() => setValidated(true)}
    />
  );
};
