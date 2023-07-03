import React from "react";
import { useMediaQuery } from "usehooks-ts";

const Phones = ({ props }) => {
  const maxWidth850 = useMediaQuery("(max-width: 860px)");
  const { brand, model, storage, ram, screen, gsm } = props;

  return (
    <>
      <div className="brand">{brand}</div>
      <div className="model">{model}</div>
      {!maxWidth850 ? (
        <div className="storage">{storage} Go</div>
      ) : (
        <div className="storage">{storage}</div>
      )}
      {!maxWidth850 ? (
        <div className="ram">{ram} Go</div>
      ) : (
        <div className="ram">{ram}</div>
      )}
      {!maxWidth850 ? <div className="screen">{screen} pouces</div> : null}
      {!maxWidth850 ? <div className="gsm">{gsm}</div> : null}
    </>
  );
};

export default Phones;
