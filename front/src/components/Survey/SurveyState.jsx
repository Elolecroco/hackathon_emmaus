import React from 'react'
import './surveyState.css'

const SurveyState = () => {
  return (
    <div className='state_background'>
      <div className="survey_state_texte_background">
        <p className="state_step">
          Etape 1 / 5 - Modèle du téléphone
        </p>
        <p className="return">
          Retour
        </p>
      </div>
      <div className="survey_line_background">
        <div className="survey_total_line"></div>
        <div className="survey_position_line "></div>
      </div>
    </div>
  )
}

export default SurveyState