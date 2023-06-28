import React from "react";
import "./phoneList.css";
import Phones from "../components/PhoneList/Phones";
import axios from "axios";
import { useEffect, useState } from "react";

const PhoneList = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5080/api/phones`)
      .then((res) => res.data)
      .then((data) => setPhones(data));
  }, []);

  return (
    <div>
      <div className="list_background">
        <div className="list_content">
          <div className="top">
            <h1>Base de donnée</h1>
            <button>Ajouter un smartphone</button>
          </div>
          <div className="table">
            <div className="header">
              <div className="brand">Marque</div>
              <div className="model">Modele</div>
              <div className="storage">Stockage</div>
              <div className="ram">RAM</div>
            </div>
            {phones &&
              phones.map((phone) => (
                <div className="line" key={phone.id}>
                  <Phones props={phone} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneList;
