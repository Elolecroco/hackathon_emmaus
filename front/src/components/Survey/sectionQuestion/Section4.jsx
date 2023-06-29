import React from 'react'

const Section4 = ({setScreenState, goTOSection5}) => {
  return (
    <div className="question_part_4">
      <div className='section4_question'>
        <p>
        Quel est l'état de la coque et du contour ? 
        </p>
      </div>
      
      <div className='section4_choice'>
        <input type='radio' id='section4_perfect' name='back_state_choice' onClick={() => setScreenState("Parfait état")}/>
        <label htmlFor="back_state_choice">Parfait état</label>
        <p className='back_state_desc'>Parfait état, aucune rayure visible</p>
      </div>
      <div className='section4_choice'>
        <input type='radio' id='section4_veryGood' name='back_state_choice'onClick={() => setScreenState("Très bon état")}/>
        <label htmlFor="back_state_choice">Très bon état</label>
        <p className='back_state_desc'>Peuvent présenter des micro-rayures, à peine visibles (invisibles à 20cm), sans fissure ni/ou impact</p>
      </div>
      <div className='section4_choice'>
        <input type='radio' id='section4_correct' name='back_state_choice' onClick={() => setScreenState("Etat correct")}/>
        <label htmlFor="back_state_choice">Etat correct</label>
        <p className='back_state_desc'>Peuvent présenter des traces d'usure visibles, des rayures profondes et/ou petits impacts</p>
      </div>
      <div className='section4_choice'>
        <input type='radio' id='section4_broken' name='back_state_choice' onClick={() => setScreenState("Cassés")}/>
        <label htmlFor="back_state_choice">Cassés</label>
        <p className='back_state_desc'>Peuvent présenter au moins une fissure ou sont visiblement cassés</p>
      </div>
    <button onClick={goTOSection5}>Continuer</button>
</div>
)
}

export default Section4