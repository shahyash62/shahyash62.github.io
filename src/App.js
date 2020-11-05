import React, { useState, useEffect } from 'react';
import About from './pages/About/About';
import Cover from './pages/Cover/Cover';
import LandingPage from './pages/LandingPage/LandingPage';
import Work from './pages/Work/Work';
import theme from './App.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBriefcase, faHome, faLeaf, faSmile, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';
function App() {
    const [position, setposition] = useState({});
    const [leavesState, setleavesState] = useState([]);
    const [autumnLeavesState, setautumnLeavesState] = useState([]);
    const [snowState, setsnowState] = useState([]);
    const [bgColor, setBgColor] = useState({ background: 'rgb(91, 177, 205)' });
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    useEffect(() => {
        const leaves = [];
        const autumnLeaves = [];
        const snow = [];
        for (let count = 0; count < 100; count += 1) {
            const left = `${getRandomInt(0, 100)}%`;
            const top = `${getRandomInt(-20, -5)}px`;
            const animationDuration = `${getRandomInt(20, 100)}s`;
            leaves.push(
                <span key={count} style={{ left, top, animationDuration, color: 'rgb(0, 101, 85)' }} className={theme.fallingObj}>
                    <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon>
                </span>
            );
            autumnLeaves.push(
                <span key={count} style={{ left, top, animationDuration, color: 'rgb(255, 65, 0)' }} className={theme.fallingObj}>
                    <FontAwesomeIcon icon={faCanadianMapleLeaf}></FontAwesomeIcon>
                </span>
            );
            snow.push(
                <span key={count} style={{ left, top, animationDuration, color: 'rgb(0, 17, 51)' }} className={theme.fallingObj}>
                    <FontAwesomeIcon icon={faSnowflake}></FontAwesomeIcon>
                </span>
            );
        }
        setleavesState(leaves);
        setautumnLeavesState(autumnLeaves);
        setsnowState(snow);
    }, []);
    function viewPage(page) {
        if (page) {
            switch (page) {
                case 'about':
                    setBgColor({ background: 'rgba(0, 101, 85, 0.8)' });
                    break;
                case 'work':
                    setBgColor({ background: 'rgba(255, 65, 0, 0.8  )' });
                    break;
                case 'cover':
                    setBgColor({ background: 'rgba(0, 17, 51, 0.8)' });
                    break;
                default:
                    break;
            }
            setposition({
                [page]: { opacity: '1', zIndex: '1000' },
            });
        } else {
            setBgColor({ background: 'rgb(91, 177, 205)' });
            setposition({});
        }
    }
    return (
        <div className={theme.App}>
            <LandingPage></LandingPage>
            <About position={position} fallingObj={leavesState}></About>
            <Work position={position} fallingObj={autumnLeavesState}></Work>
            <Cover position={position} fallingObj={snowState}></Cover>
            <div className={theme.navButtonGroup}>
                <button style={bgColor} onClick={() => viewPage()} className={theme.button}>
                    <FontAwesomeIcon icon={faHome} />
                </button>
                <button style={bgColor} onClick={() => viewPage('about')} className={theme.button}>
                    <FontAwesomeIcon icon={faSmile} />
                </button>
                <button style={bgColor} onClick={() => viewPage('work')} className={theme.button}>
                    <FontAwesomeIcon icon={faBriefcase} />
                </button>
                <button style={bgColor} onClick={() => viewPage('cover')} className={theme.button}>
                    <FontAwesomeIcon icon={faAddressBook} />
                </button>
            </div>
        </div>
    );
}

export default App;
