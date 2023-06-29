import React, { useState } from 'react';
import './MenuBurger.css';

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-burger">
      <button className="menu-burger__button" onClick={toggleMenu}>
        <span className="menu-burger__bar"></span>
        <span className="menu-burger__bar"></span>
        <span className="menu-burger__bar"></span>
      </button>
      {isOpen && (
        <ul className="menu-burger__list">
          <li className="menu-burger__item">Estimer un smartphone</li>
          <li className="menu-burger__item">Nos smartphones</li>
          <li className="menu-burger__item">Ajouter un smartphone</li>
          <li className="menu-burger__item">Se déconnecter</li>
        </ul>
      )}
    </div>
  );
};

export default MenuBurger;