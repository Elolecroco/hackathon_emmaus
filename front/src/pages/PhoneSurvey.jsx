import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SurveyState from "../components/Survey/SurveyState";
import SurveyResume from "../components/Survey/SurveyResume";
import SurveyQuestion from "../components/Survey/SurveyQuestion";
import CategoryCalc from "../components/Calc/CategoryCalc";
import "./phoneSurvey.css";
import SurveyAllInformation from "../components/Survey/SurveyAllInformation";

const PhoneSurvey = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedScreenQuality, setSelectedScreenQuality] = useState("");
  const [selectedGlobalQuality, setSelectedGlobalQuality] = useState("")
  const [unlockedSim, setUnlockedSim] = useState(null)
  const [selectedStructurePhoneQuality, setSelectedStructurePhoneQuality] = useState("")
  const [phoneRam, setPhoneRam] = useState("");
  const [seeSection1, setSeeSection1] = useState(true);
  const [seeSection2, setSeeSection2] = useState(false);
  const [seeSection3, setSeeSection3] = useState(false);
  const [seeSection4, setSeeSection4] = useState(false);
  const [seeSection5, setSeeSection5] = useState(false);
  const [seeAllInformation, setSeeAllInformation] = useState(false);

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
            selectedScreenQuality={selectedScreenQuality}
            selectedGlobalQuality={selectedGlobalQuality}
            unlockedSim={unlockedSim}
            selectedStructurePhoneQuality={selectedStructurePhoneQuality}
          />
          <SurveyQuestion
            selectedBrand={selectedBrand}
            selectedModel={selectedModel}
            selectedStorage={selectedStorage}
            selectedScreenQuality={selectedScreenQuality}
            selectedGlobalQuality={selectedGlobalQuality}
            selectedStructurePhoneQuality={selectedStructurePhoneQuality}
            phoneRam={phoneRam}
            setSelectedStructurePhoneQuality ={setSelectedStructurePhoneQuality}
            setSelectedGlobalQuality ={setSelectedGlobalQuality}
            setSelectedBrand={setSelectedBrand}
            setSelectedModel={setSelectedModel}
            setSelectedStorage={setSelectedStorage}
            setSelectedScreenQuality={setSelectedScreenQuality}
            setUnlockedSim={setUnlockedSim}
            setPhoneRam={setPhoneRam}
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
            setSeeAllInformation={setSeeAllInformation}
          />
          <CategoryCalc 
            selectedStorage={selectedStorage}
            unlockedSim={unlockedSim}
            selectedScreenQuality={selectedScreenQuality}
            selectedStructurePhoneQuality={selectedStructurePhoneQuality}
            selectedGlobalQuality={selectedGlobalQuality}
            phoneRam={phoneRam}
          />
        </div>
        {seeAllInformation ? (
          <SurveyAllInformation
            selectedBrand={selectedBrand}
            selectedModel={selectedModel}
            selectedStorage={selectedStorage}
            selectedScreenQuality={selectedScreenQuality}
            selectedGlobalQuality={selectedGlobalQuality}
            unlockedSim={unlockedSim}
            selectedStructurePhoneQuality={selectedStructurePhoneQuality}
            setSeeAllInformation={setSeeAllInformation}
          />
        ) : null}
      </div>
    </div>
  );
};

export default PhoneSurvey;
