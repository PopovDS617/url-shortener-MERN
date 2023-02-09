import React from "react";

type Props = {
  response: string;
};

const SuccessResponse = (props: Props) => {
  return (
    <>
      <p className="mt-2">{process.env.API_URL + props.response}</p>
    </>
  );
};

export default SuccessResponse;
