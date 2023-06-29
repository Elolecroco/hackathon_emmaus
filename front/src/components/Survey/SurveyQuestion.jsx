import React, { useState } from "react";
import "./surveyQuestion.css";
import Section1 from "./sectionQuestion/section1";
import Section2 from "./sectionQuestion/Section2";
import Section3 from "./sectionQuestion/Section3";
import Section4 from "./sectionQuestion/Section4";
import Section5 from "./sectionQuestion/Section5";

const SurveyQuestion = ({
  selectedBrand,
  selectedModel,
  selectedStorage,
  unlockedSim,
  screenState,
  seeSection1,
  seeSection2,
  seeSection3,
  seeSection4,
  seeSection5,
  setSelectedBrand,
  setSelectedModel,
  setSelectedStorage,
  setUnlockedSim,
  setScreenState,
  setSeeSection1,
  setSeeSection2,
  setSeeSection3,
  setSeeSection4,
  setSeeSection5
}) => {
  const [phoneData, setPhoneData] = useState(["lalalal", "lala", "la"]);
  

 

  const goTOSection2 = () => {
    setSeeSection1(false);
    setSeeSection2(true);
    setSeeSection3(false);
    setSeeSection4(false);
    setSeeSection5(false);
  };

  const goTOSection3 = () => {
    setSeeSection1(false);
    setSeeSection2(false);
    setSeeSection3(true);
    setSeeSection4(false);
    setSeeSection5(false);
  };

  const goTOSection4 = () => {
    setSeeSection1(false);
    setSeeSection2(false);
    setSeeSection3(false);
    setSeeSection4(true);
    setSeeSection5(false);
  };

  const goTOSection5 = () => {
    setSeeSection1(false);
    setSeeSection2(false);
    setSeeSection3(false);
    setSeeSection4(false);
    setSeeSection5(true);
  };

  return (
    <div className="question_background">
      {seeSection1 ?  <Section1
        selectedBrand={selectedBrand}
        selectedModel={selectedModel}
        selectedStorage={selectedStorage}
        setSelectedBrand={setSelectedBrand}
        setSelectedModel={setSelectedModel}
        setSelectedStorage={setSelectedStorage}
        phoneData ={phoneData}
        goTOSection2 ={goTOSection2}
      />
      : seeSection2 ?
       <Section2 setUnlockedSim={setUnlockedSim} goTOSection3={goTOSection3} />
      : seeSection3 ? 
       <Section3 goTOSection4={goTOSection4} />
      : seeSection4 ?
        <Section4 setScreenState={setScreenState} goTOSection5={goTOSection5} />
      : seeSection5 ?
       <Section5 />
      : null
      }
     
     
    </div>
  );
};

export default SurveyQuestion;
