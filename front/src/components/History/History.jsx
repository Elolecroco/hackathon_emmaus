import React from "react";

const History = ({ props }) => {
  const { brand, model, storage, ram, screen, gsm, rank, price } = props;

  return (
    <>
      <div className="history_brand">{brand}</div>
      <div className="history_model">{model}</div>
      <div className="history_storage">{storage} Go</div>
      <div className="history_ram">{ram} Go</div>
      <div className="history_screen">{screen} pouces</div>
      <div className="history_gsm">{gsm}</div>
      <div className="history_rank">{rank}</div>
      <div className="history_price">{price} €</div>
    </>
  );
};

export default History;
