import React from 'react'

const Section2 = ({goTOSection3}) => {
  return (
    <div className="question_section">
        <p>section2</p>
        <button onClick={goTOSection3}>Continuer</button>
    </div>
  )
}

export default Section2