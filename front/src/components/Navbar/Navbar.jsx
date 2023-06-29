import { Link, NavLink, useLocation } from 'react-router-dom';
import { PiUser } from 'react-icons/pi'
import { MdLogout, MdSettings } from 'react-icons/md'
import emmausLogo from '../../assets/logo_emmaus_connect.svg';
import './Navbar.css';
import { useState, useRef, useEffect } from 'react';
import MenuBurger from '../MenuBurger/MenuBurger';

const Navbar = ({removeToken, token}) => {

    const {pathname} = useLocation();
    const splitLocation = pathname.split('/');
    const [isMenuLogout, setIsMenuLogout] = useState(false);
    const closeMenuRef = useRef(null);

    const openCloseLogoutMenu = (e) =>{
        e.stopPropagation();
        setIsMenuLogout(!isMenuLogout)
    }

    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (closeMenuRef.current && !closeMenuRef.current.contains(e.target)) {
            setIsMenuLogout(false);
          }
        };
        document.addEventListener('click', handleOutsideClick);

        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
    }, []);    

    return (
        <div className='navbar-container'>
            <Link to="/">
                <div className='logo-container'>
                    <img className='logo' src={emmausLogo} alt='logo emmaus connect' />
                </div>
            </Link>
            <div className="menu_entries">
                <div className="user_profile">
                    <p className='user_fullname'>{token && token.firstname} {token && token.lastname}</p>
                    <PiUser className='user-icon' onClick={openCloseLogoutMenu} />
                </div>
                
                <div className={isMenuLogout ? 'menu_logout' : 'menu_logout invisible'} ref={closeMenuRef}>
                        <div className="logout_container"  onClick={removeToken}>
                            <MdLogout className='logout-icon'/>
                            <p className="logout">Se déconnecter</p>
                        </div>
                        <NavLink to='/minconfig' className={splitLocation[1] === "minconfig" ? "active" : ""}>
                            <div className="parameters_container">
                                <MdSettings className='logout_burger-icon'/>
                                <p className="logout" onClick={openCloseLogoutMenu}>Paramètres</p>
                            </div>
                    </NavLink>
                </div>
                <div className='smartphone-options'>
                    <NavLink to='/phonesurvey' className={splitLocation[1] === "phonesurvey" ? "active" : ""}>
                        <p>Estimer un smartphone</p>
                    </NavLink>
                    <NavLink to='/history' className={splitLocation[1] === "history" ? "active" : ""}>
                        <p>Nos smartphones</p>
                    </NavLink>
                    {token && token.role === "admin" 
                        ? <NavLink to='/phonelist' className={splitLocation[1] === "phonelist" ? "active" : ""}>
                            <p>Ajouter un smartphone</p>
                        </NavLink> 
                        : null}
                </div>
            </div>
            <MenuBurger removeToken={removeToken} token={token}/>
        </div>
        
    )
}

export default Navbar;
