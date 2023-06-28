import React, { useEffect, useState } from 'react'
import axios from 'axios';
//import components
import Navbar from '../components/Navbar/Navbar'
//import css
import './addPhone.css'
//import assets
import illustration from '../assets/ajouter-mobile_illus.png'

const AddPhone = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5080/api/phones')
            .then((res) => setData(res.data));
    },[]);

    //reducing all brands, models, ram and storages
    const brands = data?.reduce((acc, { brand, model, storage, ram, screen, gsm })=>{
        if(!acc.brand.includes(brand)) acc.brand.push(brand);
        if(!acc.model.includes(model)) acc.model.push(model);
        if(!acc.storage.includes(storage)) acc.storage.push(storage);
        if(!acc.ram.includes(ram)) acc.ram.push(ram);
        if(!acc.screen.includes(screen)) acc.screen.push(screen);
        if(!acc.gsm.includes(gsm)) acc.gsm.push(gsm);
        return acc;
    }, { brand : [], model : [], storage : [], ram : [], screen : [], gsm : [] });

    //sorting ram options
    brands && brands.ram.sort((a,b) =>{
        return a-b;
    })

    //sorting storage options
    brands && brands.storage.sort((a,b) =>{
        return a-b;
    })

    //sorting screen options
    brands && brands.screen.sort((a,b) =>{
        return a-b;
    })

    //sorting gsml options
    brands && brands.gsm.sort((a,b) =>{
        return a-b;
    })
    
    brands && console.log(brands);

    const inputChange = (e) =>{
        console.log(e.target.value, e.target.name);
    }

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
                            <input type="text" name="brand" id="brand" required placeholder='Marque' onChange={inputChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor="model">Modèle</label>
                            <input type="text" name="model" id="model" required placeholder='Modèle' onChange={inputChange}/>
                        </div>
                        <div className="field_split">
                            <div className="field">
                                <label htmlFor="storage">Stockage</label>
                                <input type="text" name="storage" id="storage" required placeholder='Mémoire de stockage' onChange={inputChange}/>
                            </div>
                            <div className="field">
                                <label htmlFor="ram">Mémoire RAM</label>
                                <input type="text" name="ram" id="ram" required placeholder='Mémoire RAM' onChange={inputChange}/>
                            </div>
                        </div>
                        <div className="field_split">
                            <div className="field">
                                <label htmlFor="screen">Écran</label>
                                <input type="text" name="screen" id="screen" required placeholder="Taille de l'écran" onChange={inputChange}/>
                            </div>
                            <div className="field">
                                <label htmlFor="gsm">Réseau</label>
                                <input type="text" name="gsm" id="gsm" required placeholder='Réseau' onChange={inputChange}/>
                            </div>
                        </div>
                        <button type='submit'>Ajouter un smartphone</button>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default AddPhone