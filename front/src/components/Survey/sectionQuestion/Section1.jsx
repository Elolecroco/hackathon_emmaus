import React from "react";

const Section1 = ({
  selectedBrand,
  selectedModel,
  selectedStorage,
  setSelectedBrand,
  setSelectedModel,
  setSelectedStorage,
  phoneData,
  goTOSection2
}) => {
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleStorageChange = (event) => {
    setSelectedStorage(event.target.value);
  };
  return (
    <div className="question_section">
      <div className="section_list">
        <label htmlFor="selectOption">
          Quelle est la marque du téléphone ?
        </label>
        <select
          id="selectOption"
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value="" hidden>
            {" "}
            Marque
          </option>
          {phoneData && phoneData.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className="section_list">
        <label htmlFor="selectOption">
          Quelle est le modèle du téléphone ?
        </label>
        <select
          id="selectOption"
          value={selectedModel}
          onChange={handleModelChange}
        >
          <option value="" hidden>
            Modèle
          </option>
          {phoneData && phoneData.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className="section_list">
        <label htmlFor="selectOption">
          Quelle est le stockage du téléphone ?
        </label>
        <select
          id="selectOption"
          value={selectedStorage}
          onChange={handleStorageChange}
        >
          <option value="" hidden>
            Stockage
          </option>
          { phoneData && phoneData.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <button onClick={goTOSection2}>Continuer</button>
    </div>
  );
};

export default Section1;
