import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import logo_ver2 from "../../assets/logo_emmaus_connect_ver2.png";
import "./Footer.css";

const Footer = () => {
  const maxWidth850 = useMediaQuery("(max-width: 860px)");

  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        {!maxWidth850 ? <img src={logo_ver2} /> : null}
      </div>
      <div className="footer-faq">
        <Link to="/faq">FAQ</Link>
        <p>Mentions legales</p>
        <br />
        <p className="credits">
          © Éloïse Brochier - Romain VALOT - Eric GODEFROY - Olivier GOMEZ -
          Martin NOËL
        </p>
      </div>
    </div>
  );
};

export default Footer;
