import React, { useEffect, useState } from "react";
import OnResponseAnimation from "../animation/OnResponseAnimation";
import ArrowIcon from "../ui/ArrowIcon";
import QRCode from "react-qr-code";

import CopyButton from "../ui/buttons/CopyButton";

type Props = {
  response: string;
  error: {
    hasError: boolean;
    errorMessage: string;
  };
};

const Response = (props: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setIsCopied(false);
  }, [props.response]);

  const copyTextToClipboard = async () => {
    if (props.response && "clipboard" in navigator) {
      await navigator.clipboard.writeText(process.env.API_URL + props.response);
      setIsCopied(true);
    }
  };

  return (
    <>
      {(props.response || props.error.hasError) && (
        <OnResponseAnimation style="mt-5 flex w-full flex-col items-center justify-start">
          <ArrowIcon />
          {props.response && (
            <>
              <div
                className="mt-2 flex items-start justify-center"
                role="response-with-success"
              >
                <p>{process.env.API_URL + props.response}</p>
                <div className="cursor-pointer px-2">
                  <button onClick={copyTextToClipboard}>
                    <CopyButton variant={isCopied ? "done" : "copy"} />
                  </button>
                </div>
              </div>
              <div className="mt-10">
                <QRCode
                  bgColor="black"
                  fgColor="white"
                  size={256}
                  value={process.env.API_URL + props.response}
                  viewBox={`0 0 256 256`}
                />
              </div>
            </>
          )}
          {props.error.hasError && (
            <p className="mt-2" role="response-with-error">
              {props.error.errorMessage}
            </p>
          )}
        </OnResponseAnimation>
      )}
    </>
  );
};

export default Response;
