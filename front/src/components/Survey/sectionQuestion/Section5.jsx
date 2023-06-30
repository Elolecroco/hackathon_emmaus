import React from "react";

const Section5 = ({
  selectedGlobalQuality,
  setSelectedGlobalQuality,
  setSeeAllInformation,
}) => {
  const handleFonctionalQualityChange = (event) => {
    setSelectedGlobalQuality(event.target.value);
  };
  const handleSeeAllInformation = (event) => {
    setSeeAllInformation(true);
  };

  return (
    <div>
      <p className="title_survey">L'appareil est il fonctionnel ?</p>
      <ul className="list_section">
        <li className="button_list_section">
          L'appareil démarre, s'éteint et se charge normalement. Il est équipé
          d'une batterie fonctionnelle, d'une coque et d'un tiroir SIM.
        </li>
        <li className="button_list_section">
          Les appareils photo avant et arrière fonctionnent parfaitement.
        </li>
        <li className="button_list_section">
          Les haut-parleurs et les microphones fonctionnent parfaitement.
        </li>
        <li className="button_list_section">
          Les technologies Touch ID et Face ID sont fonctionnelles (si
          présentes).
        </li>
        <li className="button_list_section">
          Toutes les autres fonctionnalités, telles que le Wifi, le Bluetooth,
          les boutons, etc., sont en parfait état de fonctionnement.
        </li>
        <li className="button_list_section">
          Note importante : Assurez-vous de vous déconnecter de tous les comptes
          (iCloud, Google ou autres), que l'appareil soit opérationnel. Nous n'acceptons pas les articles déformés et/ou oxydés.
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
      <button onClick={handleSeeAllInformation}>Vérifier le téléphone</button>
    </div>
  );
};

export default Section5;
