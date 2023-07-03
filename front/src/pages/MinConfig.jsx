import axios from 'axios';
import { useState, useEffect } from 'react';
import { HiPencil, HiCheck } from 'react-icons/hi';
import './minConfig.css';

const MinConfig = () => {
    
    
    const [isRamOpen, setIsRamOpen] = useState(false);
    
    const [isMemoryOpen, setIsMemoryOpen] = useState(false);
    
    const [isScreenHeightOpen, setIsScreenHeightOpen] = useState(false);
    
    const [isGsmOpen, setIsGsmOpen] = useState(false);
    
    const [data, setData] = useState({})

    const onChangeInput = (e) => {
        let key = e.target.name;
        let value = e.target.value;

        if (key === 'gsm') {
            setData({...data, 
                [key]: value
            })
        } else {
            setData({...data,
            [key]: parseInt(value)
            })
        }

    }

    useEffect(() => {
        axios.get('http://localhost:5080/api/config')
            .then(res => {
                setData(res.data[0])
            })
            .catch(err => console.error(err))
        }, [])

    const handleRam = () => {
        setIsRamOpen(!isRamOpen)
    }

    const handleMemory = () => {
        setIsMemoryOpen(!isMemoryOpen)
    }

    const handleScreenHeight = () => {
        setIsScreenHeightOpen(!isScreenHeightOpen)
    }

    const handleGsm = () => {
        setIsGsmOpen(!isGsmOpen)
    }

    const submitChanges = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:5080/api/config/update", data)
            .then((res) => res)
            .catch((error) => console.error(error));
    } 

    return (
        <div className='min-config-page'>
            <h1>Configuration minimum acceptée</h1>
                <div className='min-config-section'>
                    
                    <div className='min-config-container'>
                        <h4>RAM minimum</h4>
                        {isRamOpen === false ? <p>{data.ram} GO</p> :
                             <input 
                                type='number' 
                                id='minRam' name='ram' 
                                placeholder={`${data.ram} GO`} 
                                min={data.ram} 
                                onChange={onChangeInput}
                            /> 
                        }
                        {isRamOpen === false ? (
                            <HiPencil className='modif-min-config-icon' onClick={handleRam} />
                        ) : (
                            <HiCheck className='modif-min-config-icon' onClick={handleRam} />
                        )}
                    </div>

                    <div className='min-config-container'>
                        <h4>Mémoire minimum</h4>
                        {isMemoryOpen === false ? <p>{data.storage} GO</p> :
                             <input 
                                type='number' 
                                id='minMemory' name='storage' 
                                placeholder={`${data.storage} GO`} 
                                min={data.storage} 
                                onChange={onChangeInput}
                            /> 
                        }
                        {isMemoryOpen === false ? (
                            <HiPencil className='modif-min-config-icon' onClick={handleMemory} />
                        ) : (
                            <HiCheck className='modif-min-config-icon' onClick={handleMemory} />
                        )}
                    </div>

                    <div className='min-config-container'>
                        <h4>Taille écran minimum</h4>
                        {isScreenHeightOpen === false ? <p>{data.screen} Pouces</p> :
                             <input 
                                type='number' 
                                id='minScreenHeight' name='screen' 
                                placeholder={`${data.screen} P`} 
                                min={data.screen} 
                                onChange={onChangeInput}
                            /> 
                        }
                        {isScreenHeightOpen === false ? (
                            <HiPencil className='modif-min-config-icon' onClick={handleScreenHeight} />
                        ) : (
                            <HiCheck className='modif-min-config-icon' onClick={handleScreenHeight} />
                        )}
                    </div>

                    <div className='min-config-container'>
                        <h4>Réseau minimum</h4>
                        {isGsmOpen === false ? <p>{data.gsm}</p> :
                             <input 
                                type='text' 
                                id='minGsm' name='gsm' 
                                placeholder={data.gsm}
                                onChange={onChangeInput}
                            /> 
                        }
                        {isGsmOpen === false ? (
                            <HiPencil className='modif-min-config-icon' onClick={handleGsm} />
                        ) : (
                            <HiCheck className='modif-min-config-icon' onClick={handleGsm} />
                        )}
                    </div>

                    <button onClick={submitChanges}>Valider les changements</button>
                </div>           
        </div>
    )
}

export default MinConfig;
