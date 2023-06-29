import React from "react";
import confetti from "canvas-confetti";
import { useNavigate } from 'react-router-dom';


import "./surveyAllInformation.css";
import axios from "axios";

const SurveyAllInformation = ({
  selectedBrand,
  selectedModel,
  selectedStorage,
  selectedScreenQuality,
  selectedGlobalQuality,
  unlockedSim,
  selectedStructurePhoneQuality,
  setSeeAllInformation,
  phoneRam,
  phoneRating,
  phonePrice,
  selectedPhoneObject
}) => {
  

  let navigate = useNavigate();

  const handleModifyInformation = () => {
    setSeeAllInformation(false)
  }

  const sendPhoneOnBack = () => {
    
    const newPhone = {
      "brand": selectedPhoneObject[0].brand,
      "model": selectedPhoneObject[0].model,
      "storage": selectedPhoneObject[0].storage,
      "ram": selectedPhoneObject[0].ram,
      "screen": selectedPhoneObject[0].screen,
      "gsm": selectedPhoneObject[0].gsm,
      "price": phonePrice,
      "rank": phoneRating
    }

    axios.post("http://localhost:5080/api/history", newPhone)
      .then((res)=> {if(res.status === 201){
        setSeeAllInformation(false)
        navigate('/');
        confetti()
      }})
  }

  return (
    <div className="background_blur_resume_survey">
      <div className="background_survey_phone">
        <div className="phone_section_backgroud">
          <div className="phone_img_data">
            <div className="price_background">
              <div className="price_background_bis">
                <p className="price">{phonePrice} €</p>
              </div>
            </div>
            <p className="price_categorie">{phoneRating}</p>
          </div>

          <button className="send_button"onClick={sendPhoneOnBack}>Valider</button>
        </div>
        <div className="resume_section_background">
          <p className="title_price">Résumé</p>
          <div className="information_container">
            <p>Marque</p>
            <p>{selectedPhoneObject[0].brand}</p>
          </div>
          <div className="information_container">
            <p>Model</p>
            <p>{selectedPhoneObject[0].model}</p>
          </div>

          <div className="information_container">
            <p>Déblocage opérateur</p>
            <p>{unlockedSim}</p>
          </div>
          <div className="information_container">
            <p>Etat de l'écran</p>
            <p>{selectedScreenQuality}</p>
          </div>
          <div className="information_container">
            <p>Etat de la coque</p>
            <p>{selectedStructurePhoneQuality}</p>
          </div>
          <div className="information_container">
            <p>Téléphone Fonctionnel</p>
            <p>{selectedGlobalQuality}</p>
          </div>
          <div className="technical_info_resume">
            <div className="information_technical_container">
              <p>Stockage</p>
              <p className="technical_value">{selectedPhoneObject[0].storage}</p>
            </div>
            <div className="information_technical_container">
              <p>Mémoire Ram</p>
              <p className="technical_value">{selectedPhoneObject[0].ram}</p>
            </div>
          </div>
          <button className="change_resume_button" onClick={handleModifyInformation}>Modifier les informations</button>
        </div>
      </div>
    </div>
  );
};

export default SurveyAllInformation;
