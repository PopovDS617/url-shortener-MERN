import React from "react";

type Props = {
  variant: "active" | "disabled";
};

const FormButton = (props: Props) => {
  const buttonDefault = "ml-4 p-1 px-4 transition-all  duration-150 ";
  const buttonActive =
    "outline outline-2 outline-white duration-150  hover:-translate-y-1 hover:shadow-md hover:shadow-white hover:transition-all hover:duration-150";
  const buttonDisabled = "disabled:bg-gray-500 disabled:text-black ";

  return (
    <button
      disabled={props.variant === "disabled" ? true : false}
      className={`${buttonDefault}${
        props.variant === "active" ? buttonActive : buttonDisabled
      }`}
    >
      {props.variant === "active" ? "press" : "empty"}
    </button>
  );
};

export default FormButton;
