import { useState, useEffect } from "react";
import "./surveyState.css";

const SurveyState = ({
  setSeeSection1,
  setSeeSection2,
  setSeeSection3,
  setSeeSection4,
  setSeeSection5,
  seeSection1,
  seeSection2,
  seeSection3,
  seeSection4,
  seeSection5,
}) => {

  const [currentStep, setCurrentStep] = useState(1);
  const [currentStepName, setCurrentStepName] = useState("");

  useEffect(() => {
    // Met à jour la valeur de currentStep lorsque les états seeSectionX changent
    if (seeSection1) setCurrentStep(1) ;
    else if (seeSection2) setCurrentStep(2);
    else if (seeSection3) setCurrentStep(3);
    else if (seeSection4) setCurrentStep(4);
    else if (seeSection5) setCurrentStep(5);
  }, [seeSection1, seeSection2, seeSection3, seeSection4, seeSection5]);
  
  useEffect(() => {
    // Met à jour le nom de l'étape lorsque les états seeSectionX changent
    if (seeSection1) setCurrentStepName("L'appareil") ;
    else if (seeSection2) setCurrentStepName("Déblocage opérateur");
    else if (seeSection3) setCurrentStepName("Etat de l'écran");
    else if (seeSection4) setCurrentStepName("Etat de la coque et des contours");
    else if (seeSection5) setCurrentStepName("Etat de marche");
  }, [seeSection1, seeSection2, seeSection3, seeSection4, seeSection5]);


  const steps = [
    () => {
      setSeeSection1(true);
      setSeeSection2(false);
      setSeeSection3(false);
      setSeeSection4(false);
      setSeeSection5(false);
    },
    () => {
      setSeeSection1(false);
      setSeeSection2(true);
      setSeeSection3(false);
      setSeeSection4(false);
      setSeeSection5(false);
    },
    () => {
      setSeeSection1(false);
      setSeeSection2(false);
      setSeeSection3(true);
      setSeeSection4(false);
      setSeeSection5(false);
    },
    () => {
      setSeeSection1(false);
      setSeeSection2(false);
      setSeeSection3(false);
      setSeeSection4(true);
      setSeeSection5(false);
    },
    () => {
      setSeeSection1(false);
      setSeeSection2(false);
      setSeeSection3(false);
      setSeeSection4(false);
      setSeeSection5(true);
    },
  ];

  const handlePreviousStep = () => {
    const previousStepIndex = currentStep - 2;
    if (previousStepIndex >= 0 && previousStepIndex < steps.length) {
      steps[previousStepIndex]();
    }
  };

  return (
    <div className="state_background">
      <div className="survey_state_texte_background">
        <p className="state_step">{`Etape ${currentStep} / 5 - ${currentStepName}`}</p>

        {/* Pour afficher le bouton retour seulement à partir de l'étape 2 */}
        {currentStep !== 1 && (
          <p className="return" onClick={handlePreviousStep}>
            Retour
          </p>
        )}
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
