import React from "react";
import { Link } from "react-router-dom";
import "./phoneList.css";
import Phones from "../components/PhoneList/Phones";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const PhoneList = () => {
  const maxWidth850 = useMediaQuery("(max-width: 860px)");
  const [phones, setPhones] = useState([]);

  const resultsPerPage = 10; // Change this value as per your requirement
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const currentResults = phones.slice(startIndex, endIndex);

  useEffect(() => {
    axios
      .get(`http://localhost:5080/api/phones`)
      .then((res) => res.data)
      .then((data) => setPhones(data))
      .catch((error) => {
        return Promise.reject(error.response.data);
      });
  }, []);

  useEffect(() => {
    const calculatedTotalPages = Math.ceil(phones.length / resultsPerPage);
    setTotalPages(calculatedTotalPages);
  }, [phones.length, resultsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousClick = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    handlePageChange(currentPage + 1);
  };

  return (
    <div>
      <div className="list_background">
        <div className="list_content">
          <div className="list">
            <div className="top">
              <h1>Base de donnée</h1>
              <Link to="/addphone">Ajouter un smartphone</Link>
            </div>
            <div className="table">
              <div className="header">
                <div className="brand">Marque</div>
                <div className="model">Modele</div>
                <div className="storage">Stockage</div>
                <div className="ram">RAM</div>
                {!maxWidth850 ? <div className="screen">Ecran</div> : null}
                {!maxWidth850 ? <div className="gsm">Reseau</div> : null}
              </div>
              {currentResults &&
                currentResults.map((phone) => (
                  <div className="line" key={phone.id}>
                    <Phones props={phone} />
                  </div>
                ))}
            </div>
          </div>
          <div className="navButtons">
            <button
              className="previous"
              onClick={handlePreviousClick}
              disabled={currentPage === 1}
            >
              Page precedente
            </button>

            <button
              className="next"
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              Page suivante
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneList;
