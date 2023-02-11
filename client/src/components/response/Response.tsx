import React from "react";
import OnResponseAnimation from "../animation/OnResponseAnimation";
import ArrowIcon from "../ui/ArrowIcon";

type Props = {
  response: string;
  error: {
    hasError: boolean;
    errorMessage: string;
  };
};

const Response = (props: Props) => {
  return (
    <>
      {(props.response || props.error.hasError) && (
        <OnResponseAnimation style="mt-5 flex w-full flex-col items-center justify-start">
          <ArrowIcon />
          {props.response && (
            <p className="mt-2" role="response-with-success">
              {process.env.API_URL + props.response}
            </p>
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
