import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IPSResult } from "./IPSResult";
import { IPSForm } from "./IPSForm";
import { useIPS } from "../api/useIPS";
import { LoadingIndicator } from "./LoadingIndicator";

export const Main = () => {
  const [validated, setValidated] = useState(false);
  const [payload, setPayload] = useState(null);
  const {
    payload: payloadBase64 = "ewogICAgImRhdGVPZkJpcnRoIjogIjIwMjItMTItMTIiCn0=",
  } = useParams();

  const {
    data: ipsPayload,
    isLoading,
    isError,
  } = useIPS({ url: payload?.url });

  useEffect(() => {
    const payloadString = atob(payloadBase64);
    setPayload(JSON.parse(payloadString));
  }, [payloadBase64]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return validated ? (
    <IPSResult ipsPayload={ipsPayload} />
  ) : (
    <IPSForm
      hasError={isError}
      ipsPayload={ipsPayload}
      onValidate={() => setValidated(true)}
    />
  );
};
