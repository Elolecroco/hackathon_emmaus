import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SurveyState from "../components/Survey/SurveyState";
import SurveyResume from "../components/Survey/SurveyResume";
import SurveyQuestion from "../components/Survey/SurveyQuestion";
import "./phoneSurvey.css";

const PhoneSurvey = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [unlockedSim, setUnlockedSim] = useState(null)
  const [screenState, setScreenState] = useState(null)
  const [seeSection1, setSeeSection1] = useState(true);
  const [seeSection2, setSeeSection2] = useState(false);
  const [seeSection3, setSeeSection3] = useState(false);
  const [seeSection4, setSeeSection4] = useState(false);
  const [seeSection5, setSeeSection5] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="survey_background">
        <SurveyState
          setSeeSection1={setSeeSection1}
          setSeeSection2={setSeeSection2}
          setSeeSection3={setSeeSection3}
          setSeeSection4={setSeeSection4}
          setSeeSection5={setSeeSection5}
          seeSection1={seeSection1}
          seeSection2={seeSection2}
          seeSection3={seeSection3}
          seeSection4={seeSection4}
          seeSection5={seeSection5}
        />
        <div className="survey_content">
          <SurveyResume
            selectedBrand={selectedBrand}
            selectedModel={selectedModel}
            selectedStorage={selectedStorage}
            unlockedSim={unlockedSim}
            screenState={screenState}
          />
          <SurveyQuestion
            selectedBrand={selectedBrand}
            selectedModel={selectedModel}
            selectedStorage={selectedStorage}
            unlockedSim={unlockedSim}
            screenState={screenState}
            setSelectedBrand={setSelectedBrand}
            setSelectedModel={setSelectedModel}
            setSelectedStorage={setSelectedStorage}
            setUnlockedSim={setUnlockedSim}
            setScreenState={setScreenState}
            setSeeSection1={setSeeSection1}
            setSeeSection2={setSeeSection2}
            setSeeSection3={setSeeSection3}
            setSeeSection4={setSeeSection4}
            setSeeSection5={setSeeSection5}
            seeSection1={seeSection1}
            seeSection2={seeSection2}
            seeSection3={seeSection3}
            seeSection4={seeSection4}
            seeSection5={seeSection5}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneSurvey;
