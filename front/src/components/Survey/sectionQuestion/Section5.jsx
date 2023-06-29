import React from "react";

const Section5 = ({ selectedGlobalQuality, setSelectedGlobalQuality }) => {
  const handleFonctionalQualityChange = (event) => {
    setSelectedGlobalQuality(event.target.value);
  };

  return (
    <div>
      <p className="title_survey">L'appareil est il fonctionnel ?</p>
      <ul>
        <li>
          L'appareil s'allume, s'éteint et se charge. Il possède une batterie,
          sa coque et un tiroir SIM.
        </li>
        <li>Les appareils photo avant et arrière fonctionnent parfaitement.</li>
        <li>Les haut-parleurs et les microphones fonctionnent parfaitement.</li>
        <li>
          Les technologies Touch ID et Face ID sont fonctionnelles (si
          présentes).
        </li>
        <li>
          Toutes les autres fonctions, y compris le Wifi, le Bluetooth, les
          boutons, etc. fonctionnent parfaitement.
        </li>
        <li>
          Important : tous les comptes (iCloud, Google ou autre) doivent être
          déconnectés, que votre appareil soit fonctionnel ou non. Nous
          n'acceptons pas les articles tordus et/ou oxydés.
        </li>
      </ul>
      <div className="section_question_part_five">
        <label htmlFor="oui" className="select_section_three">
          <div className="checkbox">
            <input
              className="check"
              type="radio"
              id="oui"
              name="oui"
              value="Oui"
              checked={selectedGlobalQuality === "Oui"}
              onChange={handleFonctionalQualityChange}
            />
          </div>
          <div className="chekbox_text">
            <p className="section_title_screen">Oui</p>
          </div>
        </label>
        <label htmlFor="non" className="select_section_three">
          <div className="checkbox">
            <input
              className="check"
              type="radio"
              id="non"
              name="non"
              value="Non"
              checked={selectedGlobalQuality === "Non"}
              onChange={handleFonctionalQualityChange}
            />
          </div>
          <div className="chekbox_text">
            <p className="section_title_screen">Non</p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Section5;
