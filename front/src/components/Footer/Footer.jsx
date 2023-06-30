import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import logo_ver2 from "../../assets/logo_emmaus_connect_ver2.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        <img src={logo_ver2} />
      </div>
      <div className="footer-faq">
        <Link to="/faq">FAQ</Link>
        <p>Mentions legales</p>
        <br />
        <p>
          © - Éloïse Brochier - Romain VALOT - Eric GODEFROY - Olivier GOMEZ -
          Martin NOËL
        </p>
      </div>
    </div>
  );
};

export default Footer;
