import React from 'react'
import './surveyResume.css'

const SurveyResume = ({selectedBrand, selectedModel, selectedStorage}) => {
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
      
    </div>
  )
}

export default SurveyResume