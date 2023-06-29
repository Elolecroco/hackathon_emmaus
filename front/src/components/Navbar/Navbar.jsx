import { Link, NavLink, useLocation } from 'react-router-dom';
import { PiUser } from 'react-icons/pi'
import emmausLogo from '../../assets/logo_emmaus_connect.svg';
import './Navbar.css';

const Navbar = () => {

    const {pathname} = useLocation();
    const splitLocation = pathname.split('/');

    return (
        <div className='navbar-container'>
            <Link to="/">
                <div className='logo-container'>
                    <img src={emmausLogo} alt='logo emmaus connect' />
                </div>
            </Link>
            <div className='smartphone-options'>
                <NavLink to='/phonesurvey' className={splitLocation[1] === "phonesurvey" ? "active" : ""}><p>Estimer un smartphone</p></NavLink>
                <NavLink to='/addphone' className={splitLocation[1] === "addphone" ? "active" : ""}><p>Ajouter un smartphone</p></NavLink>
            </div>
            <PiUser className='user-icon'/>
        </div>
    )
}

export default Navbar;