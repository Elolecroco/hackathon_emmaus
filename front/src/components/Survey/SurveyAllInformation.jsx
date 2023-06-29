import React from "react";

import "./surveyAllInformation.css";

const SurveyAllInformation = ({
  selectedBrand,
  selectedModel,
  selectedStorage,
  selectedScreenQuality,
  selectedGlobalQuality,
  unlockedSim,
  selectedStructurePhoneQuality,
  setSeeAllInformation
}) => {

  const handleModifyInformation = () => {
    setSeeAllInformation(false)
  }

  const sendPhoneOnBack = () => {
    setSeeAllInformation(false)
    console.log("lalala")
  }
  return (
    <div className="background_blur_resume_survey">
      <div className="background_survey_phone">
        <div className="phone_section_backgroud">
          <div className="phone_img_data">
            <div className="price_background">
              <div className="price_background_bis">
                <p className="price">70€</p>
              </div>
            </div>
            <p className="price_categorie">PREMIUM</p>
          </div>

          <button className="send_button"onClick={sendPhoneOnBack}>Valider</button>
        </div>
        <div className="resume_section_background">
          <p className="title_price">Résumé</p>
          <div className="information_container">
            <p>Marque</p>
            <p>{selectedBrand}</p>
          </div>
          <div className="information_container">
            <p>Model</p>
            <p>{selectedModel}</p>
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
              <p className="technical_value">{selectedStorage}</p>
            </div>
            <div className="information_technical_container">
              <p>Mémoire Ram</p>
              <p className="technical_value">23</p>
            </div>
          </div>
          <button className="change_resume_button" onClick={handleModifyInformation}>Modifier les informations</button>
        </div>
      </div>
    </div>
  );
};

export default SurveyAllInformation;
