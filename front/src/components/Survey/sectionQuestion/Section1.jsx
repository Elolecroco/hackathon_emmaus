import { useState, useEffect } from "react";
import axios from "axios";
import "../surveyQuestion.css";

const Section1 = ({
  setSelectedBrand,
  setSelectedModel,
  setSelectedStorage,
  setPhoneRam,
  setSelectedPhoneObject,
  selectedPhoneObject,
  goTOSection2,
  setSelectedGsm,
  setSelectedScreen,
  selectedBrand,
  selectedModel,
}) => {
  const [data, setData] = useState([]);
  const [phoneData, setPhoneData] = useState({
    brand: "",
    model: "",
    storage: "",
    ram: "",
  });
  const [suggestions, setSuggestions] = useState({
    name: "",
    values: [],
  });
  

  useEffect(() => {
    axios
      .get("http://localhost:5080/api/phones")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const [selectedPhone, setSelectedPhone] = useState()

  const handleSelectedStorage = (event) => {
    const selectedValue = event.target.value;
    setSelectedPhone(selectedValue);
    setSelectedPhoneObject(storageAvailable.filter(
      (el) => el.storage === parseInt(selectedValue)
    ));

  };

  const brands = data?.reduce(
    (acc, { brand, model, storage, ram }) => {
      if (!acc.brand.includes(brand)) acc.brand.push(brand);
      if (!acc.model.includes(model)) acc.model.push(model);
      if (!acc.storage.includes(storage)) acc.storage.push(storage);
      if (!acc.ram.includes(ram)) acc.ram.push(ram);
      return acc;
    },
    { brand: [], model: [], storage: [], ram: [] }
  );

  brands &&
    brands.storage.sort((a, b) => {
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
        values: brands[key].filter((el) =>
          el.toString().toLowerCase().startsWith(value.toLowerCase())
        ),
      });
    }

    if (key === "brand") {
      setPhoneData({ ...phoneData, brand: value, model: "", storage: "" });
      setSelectedBrand(value);
      setSelectedModel("");
      setSelectedStorage("");
      setPhoneRam("");
    } else if (key === "model") {
      setPhoneData({ ...phoneData, model: value, storage: "" });
      setSelectedModel(value);
      setSelectedStorage("");
      setPhoneRam("");
    } else if (key === "storage") {
      setPhoneData({ ...phoneData, storage: value });
      setSelectedStorage(value);

      if (phoneData.brand && phoneData.model && phoneData.storage) {
        const phone = data.find((item) => item.model === phoneData.model);
        if (phone) {
          setPhoneRam(phone.ram);
          setSelectedGsm(phone.gsm);
          setSelectedScreen(phone.screen);
        } else {
          setPhoneRam("");
        }
      } else {
        setPhoneRam("");
      }
    }
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


  

  const modelAvailable = data.filter((el) => el.brand === selectedBrand);
  const storageAvailable = data.filter((el) => el.model === selectedModel);

  



  return (
    <div className="question_section">
      <div className="section_list">
        <label htmlFor="section1_brand">
          Quelle est la marque du téléphone ?
        </label>
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
              <li key={i} onClick={() => selectSuggestion(el)}>
                {el}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="section_list">
        <label htmlFor="section1_model">
          Quel est le modèle du téléphone ?
        </label>
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
            {modelAvailable.map((el, i) => (
              <li key={i} onClick={() => selectSuggestion(el.model)}>
                {el.model}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="section_list">
      
      <label htmlFor="memory">
          Quel est la capacité de stockage du téléphone ?
      </label>
      <select className="memory_select_input" name="memory" id="memory" value={selectedPhone} onClick={handleSelectedStorage}>
        {storageAvailable.map((el, index) => (
          <option key={index} value={el.storage}>
            {el.storage}
          </option>
        ))}
      </select>
    </div>

      <button onClick={goTOSection2}>Continuer</button>
    </div>
  );
};

export default Section1;
