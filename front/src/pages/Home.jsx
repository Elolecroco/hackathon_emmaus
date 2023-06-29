import { Link } from 'react-router-dom';
import estimation from '../assets/estimation_illus.png';
import ajouter from '../assets/ajouter-mobile_illus.png';
import './Home.css';

const Home = () => {
    return (
        <div className='home-page'>
            <div className='main-container'>
                <div className='estimation-container'>
                    <div className='estimation-img-container'>
                        <img src={estimation} alt='illustration estimation' />
                    </div>
                    <div className="nav_button">
                        <Link to='/phonesurvey'>Estimer un smartphone</Link>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia inventore minima nobis cumque cum ullam itaque reprehenderit dolores. Temporibus minus neque rem quia voluptas dolorum quam assumenda non error eius.</p>
                </div>
                <div className='add-container'>
                    <div className='ajouter-img-container'>
                        <img src={ajouter} alt='illustration ajout' />
                    </div>
                    <div className="nav_button">
                        <Link to='/history'>Liste de nos smartphones</Link>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, autem id quaerat a, maxime vel totam nostrum quia rem similique tempore sit sed, error inventore nisi cupiditate esse! Delectus, quod.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;