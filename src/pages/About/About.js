import React from 'react';
import theme from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faCss3Alt, faNode, faNpm, faYarn, faSass, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { ionicIcon, mongoIcon } from '../../components/Icons';
import image2 from './screenshot.jpg';
import image from './screenshot2.jpg';
import image3 from './screenshot3.jpg';
import image4 from './screenshot4.jpg';

function About({ position, fallingObj }) {
    return (
        <div style={position.about} className={theme.container}>
            <div className={theme.dataContainer}>
                <div className={theme.panel}>
                    <section className={`${theme.panelSection} ${theme.panelHeadingSection}`}>
                        <h3 className={theme.panelHeader}>
                            A frontend developer who <FontAwesomeIcon icon={faHeart} />s what he does
                        </h3>
                        <p className={theme.panelTextSmall}>and that is why I am constantly learning, growing and evolving.</p>
                    </section>
                    <section className={`${theme.panelSection} ${theme.panelContentSection}`}>
                        <p className={theme.panelText}>My expertise lies in</p>
                        <div className={theme.iconList}>
                            <FontAwesomeIcon icon={faReact} />
                            <FontAwesomeIcon icon={faJsSquare} />
                            <FontAwesomeIcon icon={faCss3Alt} />
                            <FontAwesomeIcon icon={faSass} />
                            <FontAwesomeIcon icon={faGitAlt} />
                            <FontAwesomeIcon icon={faYarn} />
                            <FontAwesomeIcon icon={faNpm} />
                        </div>
                        <p className={theme.panelTextSmall}>but I am always looking to learn more!</p>
                    </section>
                </div>
                <div className={theme.panel}>
                    <section className={`${theme.panelSection} ${theme.panelHeadingSection}`}>
                        <h3 className={theme.panelHeader}>Get a feel for what I do...</h3>
                        <p className={theme.panelTextSmall}>Here are some of the projects I have worked on</p>
                    </section>
                    <section className={`${theme.panelSection} ${theme.panelContentSection}`}>
                        <p className={theme.panelTextSmall}>SuperChat: A chat application with multiple profiles.</p>
                        <p>
                            Uses React/Redux, Ionic and IndexedDb to create a PWA with Node.js/Express and MongoDB Atlas as the backend. Authentication done
                            using JWT's and chat implemented using WebSockets(Socket.io).
                        </p>
                        <div className={theme.iconList}>
                            <FontAwesomeIcon icon={faReact} />
                            <FontAwesomeIcon icon={faJsSquare} />
                            <FontAwesomeIcon icon={faSass} />
                            <FontAwesomeIcon icon={faNode} />
                            {mongoIcon}
                            {ionicIcon}
                        </div>
                        <div className={theme.imageGallery}>
                            <div className={theme.image}>
                                <img src={image} alt="" />
                            </div>
                            <div className={theme.image}>
                                <img src={image2} alt="" />
                            </div>
                            <div className={theme.image}>
                                <img src={image3} alt="" />
                            </div>
                            <div className={theme.image}>
                                <img src={image4} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className={`${theme.panelSection} ${theme.panelContentSection}`}>
                        <p className={theme.panelTextSmall}>
                            <a href="https://github.com/shahyash62" rel="noopener noreferrer" target="_blank">
                                Find more of my personal work on my Github
                            </a>
                        </p>
                    </section>
                </div>
            </div>
            {fallingObj}
        </div>
    );
}

export default About;
