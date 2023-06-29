import React from "react";

const Phones = ({ props }) => {
  const { brand, model, storage, ram } = props;

  return (
    <>
      <div className="brand">{brand}</div>
      <div className="model">{model}</div>
      <div className="storage">{storage}</div>
      <div className="ram">{ram}</div>
    </>
  );
};

export default Phones;
