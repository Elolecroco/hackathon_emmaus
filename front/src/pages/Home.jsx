import { Link } from "react-router-dom";
import estimation from "../assets/estimation_illus.png";
import ajouter from "../assets/ajouter-mobile_illus.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="main-container">
        <div className="estimation-container">
          <div className="estimation-img-container">
            <img src={estimation} alt="illustration estimation" />
          </div>
          <div className="nav_button">
            <Link to="/phonesurvey">Estimer un smartphone</Link>
          </div>
          <p>
            Cette section enregistre les valeurs techniques des téléphones pour
            estimer leur prix de revente, en analysant la marque, le modèle,
            l'état et les fonctionnalités.
          </p>
        </div>
        <div className="add-container">
          <div className="ajouter-img-container">
            <img src={ajouter} alt="illustration ajout" />
          </div>
          <div className="nav_button">
            <Link to="/history">Liste de nos smartphones</Link>
          </div>
          <p>
          Cette section affiche la liste des téléphones enregistrés dans la base de données, en fournissant des informations détaillées sur leurs caractéristiques techniques et en estimant leur prix de revente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
