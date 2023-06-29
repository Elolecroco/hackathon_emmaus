import React, { useState } from "react";

const Section3 = ({
  goTOSection4,
  setSelectedScreenQuality,
  selectedScreenQuality,
}) => {
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
            L'état est impeccable, sans rayures ni marques d'usure apparentes.
            L'écran fonctionne parfaitement, sans aucun problème de pixels (ex :
            écran fantôme, brûlure d'écran, pixels morts). Le tactile est
            entièrement fonctionnel.
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
            Il peut présenter de légères micro-rayures à peine perceptibles
            (invisibles à 20 cm), sans fissures ni impacts. L'écran fonctionne
            correctement, sans aucun problème de pixels défectueux (ex : écran
            fantôme, brûlure d'écran, pixels morts). Le tactile est entièrement
            fonctionnel.
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
            Des signes d'usure visibles, des rayures profondes et/ou de petits
            impacts peuvent être présents. Cependant, l'écran fonctionne
            correctement et ne présente aucun pixel défectueux (ex : écran
            fantôme, brûlure d'écran, pixels morts). Le tactile est en parfait
            état de fonctionnement
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
            Il est possible qu'il y ait au moins une fissure ou une casse
            visible. Dans ce cas, l'écran peut ne pas fonctionner correctement
            et présenter des pixels défectueux (ex: écran fantôme, écran brûlé,
            pixels morts) ainsi que des problèmes de tactile.
          </p>
        </div>
      </label>
      <button onClick={goTOSection4}>Continuer</button>
    </div>
  );
};

export default Section3;
