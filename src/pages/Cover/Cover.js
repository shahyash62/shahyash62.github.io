import React, { useState } from 'react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from './Cover.module.scss';

function Cover({ position, fallingObj }) {
    const [displayContact, setDisplayContact] = useState(null);
    return (
        <div style={position.cover} className={theme.container}>
            <div className={theme.dataContainer}>
                <div className={theme.panel}>
                    <h3 className={theme.panelHeader}>
                        Always looking to further hone my craft <FontAwesomeIcon icon={faLaptopCode} />.
                    </h3>
                    <p className={theme.panelText}>Here are my contact details, let me know what I can do for you!</p>
                    <div className={theme.buttonGroup}>
                        <button
                            onClick={() => setDisplayContact(<a href="mailto: shahyash62@gmail.com">shahyash62@gmail.com</a>)}
                            className={theme.contactButton}
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                        <button onClick={() => setDisplayContact(<a href="tel:+1-716-445-5096">+1-716-445-5095</a>)} className={theme.contactButton}>
                            <FontAwesomeIcon icon={faMobileAlt} />
                        </button>
                        <button className={theme.contactButton}>
                            <a href="https://www.linkedin.com/in/shahyash62/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </button>
                    </div>
                    {displayContact ? <p className={`${theme.panelTextSmall} ${theme.panelContactContainer}`}>{displayContact}</p> : null}
                </div>
            </div>
            {fallingObj}
        </div>
    );
}

export default Cover;
