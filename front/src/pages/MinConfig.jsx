import axios from 'axios';
import { useState, useEffect } from 'react';
import { HiPencil, HiCheck } from 'react-icons/hi';
import './minConfig.css';

const MinConfig = () => {

    useEffect(() => {
        axios.get('http://localhost:5080/api/config')
    }, [])

    const [minRam, setMinRam] = useState("2");
    const [newMinRam, setNewMinRam] = useState("")
    const [isRamOpen, setIsRamOpen] = useState(false);

    const [minMemory, setMinMemory] = useState("16");
    const [newMinMemory, setNewMinMemory] = useState("")
    const [isMemoryOpen, setIsMemoryOpen] = useState(false);

    const [minScreenHeight, setMinScreenHeight] = useState("4");
    const [newMinScreenHeight, setNewMinScreenHeight] = useState("")
    const [isScreenHeightOpen, setIsScreenHeightOpen] = useState(false);

    const [minGsm, setMinGsm] = useState("4");
    const [newMinGsm, setNewMinGsm] = useState("")
    const [isGsmOpen, setIsGsmOpen] = useState(false);

    const handleRam = () => {
        setIsRamOpen(!isRamOpen)
    }
    const updateRam = () => {
        if (newMinRam !== "") {
            setMinRam(newMinRam);
        }
        setIsRamOpen(!isRamOpen);
    }

    const handleMemory = () => {
        setIsMemoryOpen(!isMemoryOpen)
    }
    const updateMemory = () => {
        if (newMinMemory !== "") {
            setMinMemory(newMinMemory);
        }
        setIsMemoryOpen(!isMemoryOpen);
    }

    const handleScreenHeight = () => {
        setIsScreenHeightOpen(!isScreenHeightOpen)
    }
    const updateScreenHeight = () => {
        if (newMinScreenHeight !== "") {
            setMinScreenHeight(newMinScreenHeight);
        }
        setIsScreenHeightOpen(!isScreenHeightOpen);
    }

    const handleGsm = () => {
        setIsGsmOpen(!isGsmOpen)
    }
    const updateGsm = () => {
        if (newMinGsm !== "") {
            setMinGsm(newMinGsm);
        }
        setIsGsmOpen(!isGsmOpen);
    }


    return (
        <div className='min-config-page'>
            <h1>Configuration minimum acceptée</h1>
                <div className='min-config-section'>
                    <div className='min-config-container'>
                        <h4>RAM minimum</h4>
                        {isRamOpen === false ? <p>{minRam} GO</p> :
                             <input 
                                type='number' 
                                id='minRam' name='minRam' 
                                placeholder={`${minRam} GO`} 
                                min={minRam} 
                                value={newMinRam}
                                onChange={(e) => setNewMinRam(e.target.value)}
                            /> 
                        }
                        {isRamOpen === false ? (
                            <HiPencil className='modif-min-config-icon' onClick={handleRam} />
                        ) : (
                            <HiCheck className='modif-min-config-icon' onClick={updateRam} />
                        )}
                    </div>

                    <div className='min-config-container'>
                        <h4>Mémoire minimum</h4>
                        {isMemoryOpen === false ? <p>{minMemory} GO</p> :
                             <input 
                                type='number' 
                                id='minMemory' name='minMemory' 
                                placeholder={`${minMemory} GO`} 
                                min={minMemory} 
                                value={newMinMemory}
                                onChange={(e) => setNewMinMemory(e.target.value)}
                            /> 
                        }
                        {isMemoryOpen === false ? (
                            <HiPencil className='modif-min-config-icon' onClick={handleMemory} />
                        ) : (
                            <HiCheck className='modif-min-config-icon' onClick={updateMemory} />
                        )}
                    </div>

                    <div className='min-config-container'>
                        <h4>Taille écran minimum</h4>
                        {isScreenHeightOpen === false ? <p>{minScreenHeight} Pouces</p> :
                             <input 
                                type='number' 
                                id='minScreenHeight' name='minScreenHeight' 
                                placeholder={`${minScreenHeight} P`} 
                                min={minScreenHeight} 
                                value={newMinScreenHeight}
                                onChange={(e) => setNewMinScreenHeight(e.target.value)}
                            /> 
                        }
                        {isScreenHeightOpen === false ? (
                            <HiPencil className='modif-min-config-icon' onClick={handleScreenHeight} />
                        ) : (
                            <HiCheck className='modif-min-config-icon' onClick={updateScreenHeight} />
                        )}
                    </div>

                    <div className='min-config-container'>
                        <h4>Réseau minimum</h4>
                        {isGsmOpen === false ? <p>{minGsm}G</p> :
                             <input 
                                type='number' 
                                id='minGsm' name='minGsm' 
                                placeholder={`${minGsm}G`} 
                                min={minGsm} 
                                value={newMinGsm}
                                onChange={(e) => setNewMinGsm(e.target.value)}
                            /> 
                        }
                        {isGsmOpen === false ? (
                            <HiPencil className='modif-min-config-icon' onClick={handleGsm} />
                        ) : (
                            <HiCheck className='modif-min-config-icon' onClick={updateGsm} />
                        )}
                    </div>
                </div>           
        </div>
    )
}

export default MinConfig;
