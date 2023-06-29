import React from "react";
import { useMediaQuery } from "usehooks-ts";

const History = ({ props }) => {
  const maxWidth850 = useMediaQuery("(max-width: 860px)");
  const { brand, model, storage, ram, screen, gsm, rank, price } = props;

  return (
    <>
      <div className="history_brand">{brand}</div>
      <div className="history_model">{model}</div>
      {!maxWidth850 ? (
        <div className="history_storage">{storage} Go</div>
      ) : (
        <div className="history_storage">{storage}</div>
      )}
      {!maxWidth850 ? <div className="history_ram">{ram} Go</div> : null}
      {!maxWidth850 ? (
        <div className="history_screen">{screen} pouces</div>
      ) : null}
      {!maxWidth850 ? <div className="history_gsm">{gsm}</div> : null}
      <div className="history_rank">{rank}</div>
      <div className="history_price">{price} €</div>
    </>
  );
};

export default History;
