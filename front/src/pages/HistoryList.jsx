import React from "react";
import "./historyList.css";
import axios from "axios";
import History from "../components/History/History";
import { useEffect, useState } from "react";

const HistoryList = () => {
  const [phones, setPhones] = useState([]);

  const resultsPerPage = 10; // Change this value as per your requirement
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const currentResults = phones.slice(startIndex, endIndex);

  useEffect(() => {
    axios
      .get(`http://localhost:5080/api/history`)
      .then((res) => res.data)
      .then((data) => setPhones(data));
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

  console.log(phones);

  return (
    <div>
      <div className="history_background">
        <div className="history_content">
          <div className="history_top">
            <h1>Historique</h1>
          </div>
          <div className="history_table">
            <div className="history_header">
              <div className="history_brand">Marque</div>
              <div className="history_model">Modele</div>
              <div className="history_storage">Stockage</div>
              <div className="history_ram">RAM</div>
              <div className="history_screen">Ecran</div>
              <div className="history_gsm">Reseau</div>
              <div className="history_rank">Rang</div>
              <div className="history_price">Prix</div>
            </div>

            {currentResults &&
              currentResults.map((phone) => (
                <div className="history_line" key={phone.id}>
                  <History props={phone} />
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

export default HistoryList;
