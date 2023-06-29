import { useState, useEffect } from "react";
import axios from 'axios';

const Section1 = ({
  selectedBrand,
  selectedModel,
  selectedStorage,
  setSelectedBrand,
  setSelectedModel,
  setSelectedStorage,
  goTOSection2
}) => {
  const [data, setData] = useState([]);
  const [phoneData, setPhoneData] = useState({
    brand: "",
    model: "",
    storage: "",
  });
  const [suggestions, setSuggestions] = useState({
    name: "",
    values: [],
  });

  useEffect(() => {
    axios.get('http://localhost:5080/api/phones')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  const brands = data?.reduce((acc, { brand, model, storage }) => {
    if (!acc.brand.includes(brand)) acc.brand.push(brand);
    if (!acc.model.includes(model)) acc.model.push(model);
    if (!acc.storage.includes(storage)) acc.storage.push(storage);
    return acc;
  }, { brand: [], model: [], storage: [] });

  brands && brands.storage.sort((a, b) => {
    return a - b;
  });

  const inputChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    if (value === "") {
      setSuggestions({
        name: key,
        values: [],
      });
    } else {
      setSuggestions({
        name: key,
        values: brands[key].filter(el => el.toString().toLowerCase().startsWith(value.toLowerCase())),
      });
    }
    setPhoneData({ ...phoneData, [key]: value });
  };

  const selectSuggestion = (value) => {
    const { name } = suggestions;
    setPhoneData({ ...phoneData, [name]: value });
    setSuggestions({ name: "", values: [] });

    // stockage des valeurs entrées dans l'input au state correspondant après la selection
    if (name === "brand") {
      setSelectedBrand(value);
    } else if (name === "model") {
      setSelectedModel(value);
    } else if (name === "storage") {
      setSelectedStorage(value);
    }
  };

  return (
    <div className="question_section">
      <div className="section_list">
        <label htmlFor="section1_brand">Quelle est la marque du téléphone ?</label>
        <input
          type="text"
          name="brand"
          id="section1_brand"
          required
          placeholder="Marque"
          value={phoneData.brand}
          onChange={inputChange}
        />
        {suggestions.values && suggestions.name === "brand" ? (
          <ul className="suggestions">
            {suggestions.values.map((el, i) => (
              <li key={i} onClick={() => selectSuggestion(el)}>{el}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="section_list">
        <label htmlFor="section1_model">Quel est le modèle du téléphone ?</label>
        <input
          type="text"
          name="model"
          id="section1_model"
          required
          placeholder="Modèle"
          value={phoneData.model}
          onChange={inputChange}
        />
        {suggestions.values && suggestions.name === "model" ? (
          <ul className="suggestions">
            {suggestions.values.map((el, i) => (
              <li key={i} onClick={() => selectSuggestion(el)}>{el}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="section_list">
        <label htmlFor="section1_storage">Quelle est le stockage du téléphone ?</label>
        <input
          type="number"
          name="storage"
          id="section1_storage"
          required
          placeholder="Mémoire de stockage"
          value={phoneData.storage}
          onChange={inputChange}
        />
        {suggestions.values && suggestions.name === "storage" ? (
          <ul className="suggestions">
            {suggestions.values.map((el, i) => (
              <li key={i} onClick={() => selectSuggestion(el)}>{el}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <button onClick={goTOSection2}>Continuer</button>
    </div>
  );
};

export default Section1;
