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
        <p className="title_survey">
          Quel est l'état de la coque et du contour ?
        </p>
      </div>
      <label htmlFor="option1" className="select_section_three">
        <div className="checkbox">
          <input
            className="check"
            type="radio"
            id="option1"
            name="options"
            value="Parfait état"
            checked={selectedStructurePhoneQuality === "Parfait état"}
            onChange={handleStructurePhoneQualityChange}
          />
        </div>
        <div className="chekbox_text">
          <p className="section_title_screen">Parfait état</p>
          <p>En excellent état, aucune trace de rayure visible.</p>
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
            checked={selectedStructurePhoneQuality === "Très bon état"}
            onChange={handleStructurePhoneQualityChange}
          />
        </div>
        <div className="chekbox_text">
          <p className="section_title_screen">Très bon état</p>
          <p>
            Peuvent afficher de légères micro-rayures quasiment invisibles
            (invisibles à une distance de 20 cm), sans aucune fissure ni impact.
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
            checked={selectedStructurePhoneQuality === "Etat correct"}
            onChange={handleStructurePhoneQualityChange}
          />
        </div>
        <div className="chekbox_text">
          <p className="section_title_screen">Etat correct</p>
          <p>
            Peuvent exhiber des signes d'usure apparents, des rayures profondes
            et/ou de légers impacts.
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
            Peuvent avoir au moins une fissure apparente ou être clairement
            endommagés.
          </p>
        </div>
      </label>
      <button onClick={goTOSection5}>Continuer</button>
    </div>
  );
};

export default Section4;
