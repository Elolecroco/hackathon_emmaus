import { useState, useEffect } from "react";
import "./surveyQuestion.css";
import Section1 from "./sectionQuestion/Section1";
import Section2 from "./sectionQuestion/Section2";
import Section3 from "./sectionQuestion/Section3";
import Section4 from "./sectionQuestion/Section4";
import Section5 from "./sectionQuestion/Section5";

const SurveyQuestion = ({
  
  selectedStructurePhoneQuality,
  selectedBrand,
  selectedModel,
  selectedStorage,
  selectedScreenQuality,
  setSelectedPhoneObject,
  selectedPhoneObject,
  phoneRam,
  seeSection1,
  seeSection2,
  seeSection3,
  seeSection4,
  seeSection5,
  setSelectedStructurePhoneQuality,
  selectedGlobalQuality,
  setSelectedGlobalQuality,
  setSelectedBrand,
  setSelectedModel,
  setSelectedStorage,
  setSelectedScreenQuality,
  setUnlockedSim,
  setPhoneRam,
  setSeeSection1,
  setSeeSection2,
  setSeeSection3,
  setSeeSection4,
  setSeeSection5,
  setSeeAllInformation,
  setSelectedScreen,
  setSelectedGsm
}) => {
  
  
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
        setSelectedBrand={setSelectedBrand}
        selectedBrand={selectedBrand}
        setSelectedModel={setSelectedModel}
        selectedModel={selectedModel}
        setSelectedStorage={setSelectedStorage}
        selectedStorage={selectedStorage}
        setSelectedPhoneObject={setSelectedPhoneObject}
        selectedPhoneObject={selectedPhoneObject}
        setPhoneRam={setPhoneRam}
        setSelectedScreen={setSelectedScreen}
        setSelectedGsm={setSelectedGsm}
        phoneRam={phoneRam}
        goTOSection2 ={goTOSection2}
      />
      : seeSection2 ?
       <Section2 setUnlockedSim={setUnlockedSim} goTOSection3={goTOSection3} />
      : seeSection3 ? 
       <Section3 goTOSection4={goTOSection4} selectedScreenQuality={selectedScreenQuality} setSelectedScreenQuality={setSelectedScreenQuality} />
      : seeSection4 ?
        <Section4 setSelectedStructurePhoneQuality={setSelectedStructurePhoneQuality} goTOSection5={goTOSection5} selectedStructurePhoneQuality ={selectedStructurePhoneQuality} />
      : seeSection5 ?
       <Section5 setSelectedGlobalQuality ={setSelectedGlobalQuality} selectedGlobalQuality={selectedGlobalQuality} setSeeAllInformation={setSeeAllInformation}/>
      : null
      }
     
    </div>
  );
};

export default SurveyQuestion;
