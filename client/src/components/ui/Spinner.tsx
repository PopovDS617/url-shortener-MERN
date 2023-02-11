import React from "react";

const Spinner = () => {
  return (
    <svg
      data-testid="spinner"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style={{
        border: "none",
        outline: "none",
        margin: "0",
        background: "black",
        display: "block",
        width: "45px",
        height: "45px",
      }}
    >
      <rect
        x="20"
        y="20"
        width="45px"
        height="45px"
        stroke="black"
        strokeWidth="10"
        fill="black"
      ></rect>
      <rect
        x="20"
        y="20"
        width="60"
        height="60"
        stroke="#ffffff"
        strokeWidth="10"
        stroke-lincap="undefined"
        fill="black"
      >
        <animate
          attributeName="stroke-dasharray"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="24 216;120 120;24 216"
        ></animate>
        <animate
          attributeName="stroke-dashoffset"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;0.5;1"
          values="0;-120;-240"
        ></animate>
      </rect>
    </svg>
  );
};

export default Spinner;
