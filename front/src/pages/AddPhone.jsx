import React from 'react'
//import components
import Navbar from '../components/Navbar/Navbar'
//import css
import './addPhone.css'
//import assets
import illustration from '../assets/ajouter-mobile_illus.png'

const AddPhone = () => {

    
  return (
    <div className='add_phone_page'>
        <div className="bg_decoration"></div>
            <div className="add_phone_box">
                <div className="image_bloc">
                    <img src={illustration} alt="Add " />
                </div>
                <div className="content_bloc">
                    <div className="title">
                        <h1>
                            Ajouter un smartphone
                        </h1>
                        <p className='subtitle'>Veuillez renseigner les champs ci-dessous</p>
                    </div>
                    <form action="">
                        <div className="field">
                            <label htmlFor="brand">Marque</label>
                            <input type="text" name="brand" id="brand" placeholder='Marque'/>
                        </div>
                        <div className="field">
                            <label htmlFor="model">Modèle</label>
                            <input type="text" name="model" id="model" placeholder='Modèle'/>
                        </div>
                        <div className="field">
                            <label htmlFor="storage">Stockage</label>
                            <input type="text" name="storage" id="storage" placeholder='Mémoire de stockage'/>
                        </div>
                        <div className="field">
                            <label htmlFor="ram">Mémoire RAM</label>
                            <input type="text" name="ram" id="ram" placeholder='Mémoire RAM'/>
                        </div>
                        <button type='submit'>Ajouter un smartphone</button>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default AddPhone