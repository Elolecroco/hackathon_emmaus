import React from "react";

const Section4 = ({
  setSelectedStructurePhoneQuality,
  selectedStructurePhoneQuality,
  goTOSection5,
}) => {
  const handleStructurePhoneQualityChange = (event) => {
    setSelectedStructurePhoneQuality(event.target.value);
  };

  return (
    <div className="question_part_4">
      <div className="section4_question">
        <p className="title_survey">Quel est l'état de la coque et du contour ?</p>
      </div>
      <label htmlFor="option1" className="select_section_three">
        <div className="checkbox">
          <input
            className="check"
            type="radio"
            id="option1"
            name="options"
            value="Parfaite Etat"
            checked={selectedStructurePhoneQuality === "Parfaite Etat"}
            onChange={handleStructurePhoneQualityChange}
          />
        </div>
        <div className="chekbox_text">
          <p className="section_title_screen">Parfaite Etat</p>
          <p>Parfait état, aucune rayure visible</p>
        </div>
      </label>

      <label htmlFor="option2" className="select_section_three">
        <div className="checkbox">
          <input
            className="check"
            type="radio"
            id="option2"
            name="options"
            value="Trés bon état"
            checked={selectedStructurePhoneQuality === "Trés bon état"}
            onChange={handleStructurePhoneQualityChange}
          />
        </div>
        <div className="chekbox_text">
          <p className="section_title_screen">Trés bon état</p>
          <p>
            Peuvent présenter des micro-rayures à peine visibles (invisibles à
            20 cm), sans fissure et/ou impact
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
            value="Etat correcte"
            checked={selectedStructurePhoneQuality === "Etat correcte"}
            onChange={handleStructurePhoneQualityChange}
          />
        </div>
        <div className="chekbox_text">
          <p className="section_title_screen">Etat correcte</p>
          <p>
            Peuvent présenter des traces d’usure visibles, des rayures profondes
            et/ou petits impacts
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
            checked={selectedStructurePhoneQuality === "Cassé"}
            onChange={handleStructurePhoneQualityChange}
          />
        </div>
        <div className="chekbox_text">
          <p className="section_title_screen">Cassé</p>
          <p>
            Peuvent présenter au moins une fissure ou sont visiblement cassés
          </p>
        </div>
      </label>
      <button onClick={goTOSection5}>Continuer</button>
    </div>
  );
};

export default Section4;
