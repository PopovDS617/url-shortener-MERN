import React from "react";
import QRCode from "react-qr-code";

type Props = {
  value: string;
};

export const QrCode = (props: Props) => {
  return (
    <div className="mt-10">
      <QRCode
        bgColor="black"
        fgColor="white"
        size={256}
        value={props.value}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};
