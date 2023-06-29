import { Link } from 'react-router-dom';
import {FaFacebook, FaLinkedin, FaInstagram, FaTwitter} from 'react-icons/fa'
import logo_ver2 from '../../assets/logo_emmaus_connect_ver2.png'
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-logo-container'>
                <img src={logo_ver2} />
            </div>
            <div className='socials-container'>
                
                <h3>Nous suivre</h3>
                <div className='socials-icons-container'>
                    <Link to='https://www.facebook.com/connectemmaus'><FaFacebook className='social-icon' /></Link>
                    <Link to='https://www.instagram.com/emmausconnect/'><FaInstagram className='social-icon' /></Link>
                    <Link to='https://www.linkedin.com/company/emmausconnect/'><FaLinkedin className='social-icon' /></Link>
                    <Link to='https://twitter.com/EmmausConnect'><FaTwitter className='social-icon' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;