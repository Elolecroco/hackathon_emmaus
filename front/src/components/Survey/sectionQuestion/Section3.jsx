import React, { useState } from "react";

const Section3 = ({ goTOSection4, setSelectedScreenQuality, selectedScreenQuality}) => {
  

  const handleScreenQualityChange = (event) => {
    setSelectedScreenQuality(event.target.value);
  };



  return (
    <div className="question_section">
      <p className="title_survey">Quelle est l'état de l'écran ?</p>
      <label htmlFor="option1" className="select_section_three">
        <div className="checkbox">
          <input
            className="check"
            type="radio"
            id="option1"
            name="options"
            value="Parfait état"
            checked={selectedScreenQuality === "Parfait état"}
            onChange={handleScreenQualityChange}
          />
        </div>
        <div className="chekbox_text">
          <p className="section_title_screen">Parfait état</p>
          <p>
            Parfait état, aucune rayure ni marque d'usure n'est visible. L'écran
            est fonctionnel et ne présente aucun pixel défectueux (ex: écran
            fantôme, écran brûlé, pixels morts). Le tactile est opérationnel.
          </p>
        </div>
      </label>

      <label htmlFor="option2" className="select_section_three">
        <div className="checkbox">
          <input
            className="check"
            type="radio"
            id="option2"
            name="options"
            value="Très bon état"
            checked={selectedScreenQuality === "Très bon état"}
            onChange={handleScreenQualityChange}
          />
        </div>
        <div className="chekbox_text">
          <p className="section_title_screen">Très bon état</p>
          <p>
            Peut présenter des micro-rayures à peine visibles (invisibles à 20
            cm), sans fissure et/ou impact. L'écran est fonctionnel et ne
            présente aucun pixel défectueux (ex: écran fantôme, écran brûlé,
            pixels morts). Le tactile est opérationnel.
          </p>
        </div>
      </label>

      <label htmlFor="option3" className="select_section_three">
        <div className="checkbox">
          <input
            className="check"
            type="radio"
            id="option3"
            name="options"
            value="Etat correct"
            checked={selectedScreenQuality === "Etat correct"}
            onChange={handleScreenQualityChange}
          />
        </div>
        <div className="chekbox_text">
          <p className="section_title_screen">Etat correct</p>
          <p>
            Peut présenter des traces d’usure visibles, des rayures profondes
            et/ou petits impacts. L'écran est fonctionnel et ne présente aucun
            pixel défectueux (ex: écran fantôme, écran brûlé, pixels morts). Le
            tactile est opérationnel.
          </p>
        </div>
      </label>

      <label htmlFor="option4" className="select_section_three">
        <div className="checkbox">
          <input
            className="check"
            type="radio"
            id="option4"
            name="options"
            value="Cassé"
            checked={selectedScreenQuality === "Cassé"}
            onChange={handleScreenQualityChange}
          />
        </div>
        <div className="chekbox_text">
          <p className="section_title_screen">Cassé</p>
          <p>
            Peut présenter au moins une fissure ou est visiblement cassé.
            L'écran peut ne pas être fonctionnel et peut présenter des pixels
            défectueux (ex: écran fantôme, écran brûlé, pixels morts) et des
            problèmes de tactile.
          </p>
        </div>
      </label>
      <button onClick={goTOSection4}>Continuer</button>
    </div>
  );
};

export default Section3;
