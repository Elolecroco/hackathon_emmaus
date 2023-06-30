import React, { useState } from 'react';

import { IoIosArrowDropdown } from 'react-icons/io'




const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={toggleAccordion}>
                <p>{title}</p>
                <IoIosArrowDropdown className={isOpen? 'accordion_arrow active' : 'accordion_arrow'}/>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};

const Accordion = ({ items }) => {
    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem className="accordion_item" key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

const AccordionDone = () => {
    const accordionItems = [
        {
            title: "Qu'est-ce que la 4G et quels sont ses avantages ?",
            content: "La 4G est une technologie de réseau mobile offrant des vitesses de données plus rapides, permettant une navigation internet fluide, une diffusion de vidéos sans mise en mémoire tampon et des performances d'application améliorées. Ses avantages incluent des téléchargements plus rapides et une connectivité fiable dans les zones urbaines et rurales.",
        },
        {
            title: "Quelle est l'importance de la mémoire RAM dans un smartphone ou un ordinateur ?",
            content: "La mémoire RAM est essentielle pour les performances de votre appareil. Elle agit comme une mémoire temporaire pour les données et les programmes en cours d'utilisation. Plus la mémoire RAM est importante, plus votre appareil peut gérer efficacement les tâches simultanées, offrir une expérience multitâche fluide et réduire les retards ou les ralentissements lors de l'exécution d'applications ou de jeux gourmands en mémoire.",
        },
        {
            title: "Quelles sont les différences entre iOS et Android ?",
            content: "La 5G est la cinquième génération de technologie de réseau mobile, offrant des vitesses de données encore plus rapides que la 4G. Elle permet des téléchargements ultra-rapides, des temps de réponse plus courts et une connectivité plus stable. Les avantages de la 5G incluent une expérience de streaming vidéo améliorée, des jeux en ligne sans latence, une meilleure prise en charge des appareils connectés et une connectivité fiable dans les zones à forte densité de population.",
        },
        {
            title: "Quels critères prendre en compte pour évaluer la qualité d'un téléphone mobile ?",
            content: "Performance du processeur et de la mémoire, qualité de l'écran, autonomie de la batterie, qualité de l'appareil photo, système d'exploitation et mises à jour, qualité de construction et design, connectivité et fonctionnalités, réputation de la marque et service client ",
        },
        {
            title: "Qu'est-ce que la 5G et quels sont ses avantages ?",
            content: "iOS est le système d'exploitation développé par Apple pour ses appareils mobiles tels que l'iPhone et l'iPad, tandis qu'Android est le système d'exploitation développé par Google utilisé par de nombreux fabricants de smartphones.",
        },
    ];

    return (
        <div className="accordion_component">
            
            <Accordion items={accordionItems} />
        </div>
    );
};

export default AccordionDone;
