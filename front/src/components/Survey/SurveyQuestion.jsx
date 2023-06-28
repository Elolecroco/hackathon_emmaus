import React, { useState } from 'react'
import './surveyQuestion.css'

const SurveyQuestion = () => {

  const [phoneBrand, setPhoneBrand] = useState([])

  return (
    <div className='question_background'>
      <div className="question_part_1">
        <label htmlFor="selectOption">Sélectionnez une option :</label>
        <select id="selectOption">
          {phoneBrand.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SurveyQuestion