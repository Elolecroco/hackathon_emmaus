import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SurveyState from "../components/Survey/SurveyState";
import SurveyResume from "../components/Survey/SurveyResume";
import SurveyQuestion from "../components/Survey/SurveyQuestion";
import "./phoneSurvey.css";

const PhoneSurvey = () => {
  return (
    <div>
      <Navbar />
      <div className="survey_background">
        <SurveyState />
        <div className="survey_content">
          <SurveyResume />
          <SurveyQuestion />
        </div>
      </div>
    </div>
  );
};

export default PhoneSurvey;
