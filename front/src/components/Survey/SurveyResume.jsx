import React from 'react'
import './surveyResume.css'

const SurveyResume = ({selectedBrand, selectedModel, selectedStorage, unlockedSim, screenState}) => {
  return (
    <div className='resume_background'>

     {
      selectedBrand === "" 
      ? null
      : <div className="resume_section">
      <p>Marque</p>
      <p>{selectedBrand}</p>
    </div>
     } 
     {
      selectedModel === "" 
      ? null
      : <div className="resume_section">
      <p>Model</p>
      <p>{selectedModel}</p>
    </div>
     } 
      {
      selectedStorage === "" 
      ? null
      : <div className="resume_section">
      <p>Storage</p>
      <p>{selectedStorage}</p>
    </div>
     } 
     {
      unlockedSim === null 
      ? null
      : <div className="resume_section">
      <p>Déblocage opérateur</p>
      <p>{unlockedSim}</p>
    </div>
     } 
     {
      screenState === null 
      ? null
      : <div className="resume_section">
      <p>Etat de la coque</p>
      <p>{screenState}</p>
    </div>
     } 
      
    </div>
  )
}

export default SurveyResume