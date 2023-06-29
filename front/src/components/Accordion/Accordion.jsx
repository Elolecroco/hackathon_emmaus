import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={toggleAccordion}>
                {title}
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};

const Accordion = ({ items }) => {
    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

const AccordionDone = () => {
    const accordionItems = [
        {
            title: 'Item 1',
            content: 'Content of Item 1',
        },
        {
            title: 'Item 2',
            content: 'Content of Item 2',
        },
        {
            title: 'Item 3',
            content: 'Content of Item 3',
        },
    ];

    return (
        <div className="App">
            <h1>FAQ</h1>
            <Accordion items={accordionItems} />
        </div>
    );
};

export default AccordionDone;
