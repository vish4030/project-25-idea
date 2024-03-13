import React, { useState } from "react";

import QRCode from "react-qr-code";

const QrGenerator = () => {
  const [input, setInput] = useState("");
  const [qrcode, setQrcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQrcode(input);
    setInput("");
  };

  return (
    <div className="">
      <form className=" text-center mb-10">
        <input
          className="border-solid border border-gray-600 rounded-md p-3 text-2xl"
          type="text"
          name="qr-name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value"
        />
        <button className="border-solid border border-gray-600 rounded-md p-3 text-2xl mx-3"
         onClick={(e) => handleSubmit(e)}>
          Generate
        </button>
      </form>
      <div className="inline-block mx-[40%]">
        <QRCode id="qr-id" value={qrcode} size={250} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QrGenerator;
