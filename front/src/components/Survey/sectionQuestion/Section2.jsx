import { useState } from 'react';
import { LiaInfoCircleSolid } from 'react-icons/lia';
import '../surveyQuestion.css';

const Section2 = ({setUnlockedSim, goTOSection3}) => {
  const [showInfo, setShowInfo] = useState(false)

  const displayInfo = () => {
    setShowInfo(!showInfo);
  }

  return (
    <div className="question_part_2">
        <div className='section2-info'>
          <div className='section2-info-header'>
            <LiaInfoCircleSolid /> <p>Où trouver l'information ?</p>
          </div>
          <p>Pour vérifier si votre appareil est débloqué ou désimlocké, insérez simplement une carte SIM d'un autre opérateur dans votre téléphone. Si vous avez du réseau, c'est qu'il est débloqué. Vous pouvez aussi contacter votre opérateur pour le déverrouiller.</p>
        </div>
        <div className="section2_choice">
          <div className='section2_question'>
            <p>
            Votre produit est-il débloqué tout opérateur ? 
            </p>
            <LiaInfoCircleSolid className='section2_info_icon' onClick={displayInfo}/>
            {showInfo == true ? 
            <div className='section2_showInfo'>
              <p>Pour vérifier si votre appareil est débloqué ou désimlocké, insérez simplement une carte SIM d'un autre opérateur dans votre téléphone. Si vous avez du réseau, c'est qu'il est débloqué. Vous pouvez aussi contacter votre opérateur pour le déverrouiller.</p>
            </div> : <></>}
          </div>
          
          <div className='section2_choice'>
            <input type='radio' id='section2_oui' name='unlocked_choice' onClick={() => setUnlockedSim("Débloquée")}/>
            <label htmlFor="unlocked_choice">Oui</label>
          </div>
          <div className='section2_choice'>
            <input type='radio' id='section2_non' name='unlocked_choice' onClick={() => setUnlockedSim("Bloquée")}/>
            <label htmlFor="unlocked_choice">Non</label>
          </div>
        </div>
        <button onClick={goTOSection3}>Continuer</button>
    </div>
  )
}

export default Section2