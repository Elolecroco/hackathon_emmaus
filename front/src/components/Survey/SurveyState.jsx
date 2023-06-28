import React from "react";
import "./surveyState.css";

const SurveyState = ({
  seeSection1,
  seeSection2,
  seeSection3,
  seeSection4,
  seeSection5,
}) => {
  return (
    <div className="state_background">
      <div className="survey_state_texte_background">
        <p className="state_step">Etape 1 / 5 - Modèle du téléphone</p>
        <p className="return">Retour</p>
      </div>
      <div className="survey_line_background">
        <div className="survey_total_line"></div>
        <div
          className={
            seeSection1
              ? "survey_position_line "
              : seeSection2
              ? "survey_position_line fourty_percent"
              : seeSection3
              ? "survey_position_line sixty_percent "
              : seeSection4
              ? "survey_position_line heighty_percent "
              : seeSection5
              ? "survey_position_line hundred_percent "
              : "survey_position_line"
          }
        ></div>
      </div>
    </div>
  );
};

export default SurveyState;
