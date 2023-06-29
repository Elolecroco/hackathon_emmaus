import React, { useState } from 'react';
import './MenuBurger.css';
import { NavLink, useLocation } from 'react-router-dom';
import { MdLogout, MdSettings } from 'react-icons/md'

const MenuBurger = ({removeToken, token}) => {

  const [isOpen, setIsOpen] = useState(false);
    
  const {pathname} = useLocation();
  const splitLocation = pathname.split('/');

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
          <NavLink to='/phonesurvey' className={splitLocation[1] === "phonesurvey" ? "active_burger" : ""}>
            <li className="menu-burger__item">Estimer un smartphone</li>
          </NavLink>
          <NavLink to='/history' className={splitLocation[1] === "history" ? "active_burger" : ""}>
            <li className="menu-burger__item">Nos smartphones</li>
          </NavLink>
          {token && token.role === "admin" 
            ? <NavLink to='/phonelist' className={splitLocation[1] === "phonelist" ? "active_burger" : ""}>
                <li className="menu-burger__item">Ajouter un smartphone</li>
              </NavLink>
            : null}
          <hr />
          <div className="logout_burger" onClick={removeToken}>
            <MdLogout className='logout_burger-icon'/>
            <li className="menu-burger__item">Se déconnecter</li>
          </div>
          {token && token.role === "admin" 
            ? <NavLink to='/minconfig' className={splitLocation[1] === "minconfig" ? "active_burger" : ""}>
                <div className="logout_burger">
                  <MdSettings className='logout_burger-icon'/>
                  <li className="menu-burger__item">Paramètres</li>
                </div>
              </NavLink>
            : null }
        </ul>
      )}
    </div>
  );
};

export default MenuBurger;