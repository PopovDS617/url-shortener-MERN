import React from "react";

type Props = {
  errorText: string;
};

function ErrorResponse(props: Props) {
  return (
    <>
      {props.errorText && (
        <p className="mt-2" role="response-with-error">
          {props.errorText}
        </p>
      )}
    </>
  );
}

export default ErrorResponse;
