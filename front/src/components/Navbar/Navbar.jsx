import { Link } from 'react-router-dom';
import { PiUser } from 'react-icons/pi'
import emmausLogo from '../../assets/logo_emmaus_connect.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <Link to="/">
                <div className='logo-container'>
                    <img src={emmausLogo} alt='logo emmaus connect' />
                </div>
            </Link>
            <div className='smartphone-options'>
                <p>Estimer un smartphone</p>
                <p>Ajouter un smartphone</p>
            </div>
            <PiUser className='user-icon'/>
        </div>
    )
}

export default Navbar;