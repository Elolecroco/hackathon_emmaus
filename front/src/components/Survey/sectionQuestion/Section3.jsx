import React, { useState } from "react";

const Section3 = ({ goTOSection4 }) => {
  const [selectedScreenQuality, setselectedScreenQuality] = useState("");

  const handleScreenQualityChange = (event) => {
    setselectedScreenQuality(event.target.value);
  };

  const handleScreenQualitySubmit = (event) => {
    event.preventDefault();
    // Faites quelque chose avec la valeur sélectionnée (selectedScreenQuality)
    console.log("Option sélectionnée:", selectedScreenQuality);
  };

  return (
    <div className="question_section">
      <p>Quelle est l'état de l'écran</p>
      <form onSubmit={handleScreenQualitySubmit}>
        <div className="select_section_three">
          <div className="checkbox">
            <input
              type="radio"
              id="option1"
              name="options"
              value="Option 1"
              checked={selectedScreenQuality === "Option 1"}
              onChange={handleScreenQualityChange}
            />
          </div>
          <div className="chekbox_text">
            <h4>Parfaite Etat</h4>
            <p>
              Parfait état, aucune rayure ni marque d'usure n'est visible.
              L'écran est fonctionnel et ne présente aucun pixel défectueux (ex:
              écran fantôme, écran brûlé, pixels morts). Le tactile est
              opérationnel.
            </p>
          </div>
        </div>
      </form>
      <form onSubmit={handleScreenQualitySubmit}>
        <div className="select_section_three">
          <div className="checkbox">
            <input
              type="radio"
              id="option2"
              name="options"
              value="Option 2"
              checked={selectedScreenQuality === "Option 2"}
              onChange={handleScreenQualityChange}
            />
          </div>
          <div className="chekbox_text">
            <h4>Trés bon état</h4>
            <p>
              Peut présenter des micro-rayures à peine visibles (invisibles à 20
              cm), sans fissure et/ou impact. L'écran est fonctionnel et ne
              présente aucun pixel défectueux (ex: écran fantôme, écran brûlé,
              pixels morts). Le tactile est opérationnel
            </p>
          </div>
        </div>
      </form>
      <form onSubmit={handleScreenQualitySubmit}>
        <div className="select_section_three">
          <div className="checkbox">
            <input
              type="radio"
              id="option3"
              name="options"
              value="Option 3"
              checked={selectedScreenQuality === "Option 3"}
              onChange={handleScreenQualityChange}
            />
          </div>
          <div className="chekbox_text">
            <h4>Etat correcte</h4>
            <p>
              Peut présenter des traces d’usure visibles, des rayures profondes
              et/ou petits impacts. L'écran est fonctionnel et ne présente aucun
              pixel défectueux (ex: écran fantôme, écran brûlé, pixels morts).
              Le tactile est opérationnel
            </p>
          </div>
        </div>
      </form>
      <form onSubmit={handleScreenQualitySubmit}>
        <div className="select_section_three">
          <div className="checkbox">
            <input
              type="radio"
              id="option4"
              name="options"
              value="Option 4"
              checked={selectedScreenQuality === "Option 4"}
              onChange={handleScreenQualityChange}
            />
          </div>
          <div className="chekbox_text">
            <h4>Cassé</h4>
            <p>
            Peut présenter au moins une fissure ou est visiblement cassé. L'écran peut ne pas être fonctionnel et peut présenter des pixels défectueux (ex: écran fantôme, écran brûlé, pixels morts) et des problèmes de tactile
            </p>
          </div>
        </div>
      </form>

      <button onClick={goTOSection4}>Continuer</button>
    </div>
  );
};

export default Section3;
