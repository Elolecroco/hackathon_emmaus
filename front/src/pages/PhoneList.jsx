import React from "react";
import "./phoneList.css";
import Phones from "../components/PhoneList/Phones";
import axios from "axios";
import { useEffect, useState } from "react";

const PhoneList = () => {
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
      .then((data) => setPhones(data));
  }, []);

  useEffect(() => {
    const calculatedTotalPages = Math.ceil(phones / resultsPerPage);
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

            {currentResults &&
              currentResults.map((phone) => (
                <div className="line" key={phone.id}>
                  <Phones props={phone} />
                </div>
              ))}
          </div>
          <div>
            <button onClick={handlePreviousClick} disabled={currentPage === 1}>
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneList;
