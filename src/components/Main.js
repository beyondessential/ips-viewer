import React, { useEffect, useState } from "react";

import { IPSResult } from "./IPSResult";
import { IPSForm } from "./IPSForm";
import { useIPS } from "../api/useIPS";
import { LoadingIndicator } from "./LoadingIndicator";

export const Main = () => {
  const [hasPayloadError, setHasPayloadError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [payload, setPayload] = useState(null);

  const hash = window.location.hash;
  const payloadBase64 = hash.replace('#shlink:/', '');

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
