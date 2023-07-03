import React, { useEffect, useState } from 'react'
import axios from 'axios';
//import css
import './addPhone.css'
//import assets
import illustration from '../assets/ajouter-mobile_illus.png'

const AddPhone = () => {

    const [ data, setData ] = useState([]);
    const [ newPhone, setNewPhone ] = useState({
        brand : "",
        model : "",
        storage : "",
        ram : "",
        screen : "",
        gsm : "",
    });
    const [ suggestions, setSuggestions ] = useState({
        key : '',
        values : [],
    });

    useEffect(()=>{
        axios.get('http://localhost:5080/api/phones')
            .then((res) => setData(res.data))
            .catch((err) => console.error(err));
    },[]);

    //reducing all brands, models, ram, storages, screen, and gsm available
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
    

    //on changing the form inputs
    const inputChange = (e) =>{
        let key = e.target.name;
        let value = e.target.value;

        if(value === ''){
            setSuggestions({
                name : key,
                values : [],
            });
        }else{
            setSuggestions({
                name : key,
                values : brands[key].filter((el) => el.toString().toLowerCase().startsWith(value.toLowerCase())),
            });
        }

        setNewPhone({...newPhone,  [key] : value });
    }

    //On Selecting a suggested value
    const onSelectingSuggestion = (value, key) =>{

        setNewPhone({
            ...newPhone,
            [key]: value 
        });

        setSuggestions({
            name : key,
            values : [],
        });
    };

    //On Sending the form
    const sendingForm = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5080/api/phones', newPhone)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
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
                        <h1>Ajouter un smartphone</h1>
                        <p className='subtitle'>Veuillez renseigner les champs ci-dessous</p>
                    </div>
                    <form method="post" action="http://localhost:5080/api/phones" onSubmit={sendingForm}>
                        <div className="field">
                            <label htmlFor="brand">Marque</label>
                            <input type="text" name="brand" id="brand" required placeholder='Marque' value={newPhone.brand} onChange={inputChange}/>
                            {suggestions.values.length !== 0 && suggestions.name === "brand"
                                ?<ul className="suggestions">
                                    {suggestions.values.map((el, i) => (
                                        <li key={i} onClick={() => onSelectingSuggestion(el, "brand")} >{el}</li>
                                    ))}
                                </ul>
                                : null
                            }
                        </div>
                        <div className="field">
                            <label htmlFor="model">Modèle</label>
                            <input type="text" name="model" id="model" required placeholder='Modèle' value={newPhone.model} onChange={inputChange}/>
                            {suggestions.values.length !== 0 && suggestions.name === "model"
                                ?<ul className="suggestions">
                                    {suggestions.values.map((el, i) => (
                                        <li key={i} onClick={() => onSelectingSuggestion(el, "model")} >{el}</li>
                                    ))}
                                </ul>
                                : null
                            }
                        </div>
                        <div className="field_split">
                            <div className="field">
                                <label htmlFor="storage">Stockage</label>
                                <input type="number" name="storage" id="storage" required placeholder='Mémoire de stockage' value={newPhone.storage} onChange={inputChange}/>
                                {suggestions.values.length !== 0 && suggestions.name === "storage"
                                    ?<ul className="suggestions">
                                        {suggestions.values.map((el, i) => (
                                            <li key={i} onClick={() => onSelectingSuggestion(el, "storage")} >{el}</li>
                                        ))}
                                    </ul>
                                    : null
                                }
                            </div>
                            <div className="field">
                                <label htmlFor="ram">Mémoire RAM</label>
                                <input type="number" name="ram" id="ram" required placeholder='Mémoire RAM' value={newPhone.ram} onChange={inputChange}/>
                                {suggestions.values.length !== 0 && suggestions.name === "ram"
                                    ?<ul className="suggestions">
                                        {suggestions.values.map((el, i) => (
                                            <li key={i} onClick={() => onSelectingSuggestion(el, "ram")} >{el}</li>
                                        ))}
                                    </ul>
                                    : null
                                }
                            </div>
                        </div>
                        <div className="field_split">
                            <div className="field">
                                <label htmlFor="screen">Écran</label>
                                <input type="number" name="screen" id="screen" required placeholder="Taille de l'écran" value={newPhone.screen} onChange={inputChange}/>
                                {suggestions.values.length !== 0 && suggestions.name === "screen"
                                    ?<ul className="suggestions">
                                        {suggestions.values.map((el, i) => (
                                            <li key={i} onClick={() => onSelectingSuggestion(el, "screen")} >{el}</li>
                                        ))}
                                    </ul>
                                    : null
                                }
                            </div>
                            <div className="field">
                                <label htmlFor="gsm">Réseau</label>
                                <input type="text" name="gsm" id="gsm" required placeholder='Réseau' value={newPhone.gsm} onChange={inputChange}/>
                                {suggestions.values.length !== 0 && suggestions.name === "gsm"
                                    ?<ul className="suggestions">
                                        {suggestions.values.map((el, i) => (
                                            <li key={i} onClick={() => onSelectingSuggestion(el, "gsm")} >{el}</li>
                                        ))}
                                    </ul>
                                    : null
                                }
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