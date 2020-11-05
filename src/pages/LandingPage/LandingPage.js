import { motion } from 'framer-motion';
import React from 'react';
import theme from './LandingPage.module.scss';

function LandingPage() {
    const name = { fname: 'Yash', lname: 'Shah' };
    const variants = {
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                delayChildren: 1.3,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: 'afterChildren',
            },
        },
    };
    return (
        <div className={theme.container}>
            <motion.div initial="hidden" animate="visible" variants={variants} className={theme.nameContainer}>
                <motion.h1 initial="hidden" animate="visible" variants={variants} className={theme.fname}>
                    {name.fname}
                </motion.h1>
                <motion.h1 initial="hidden" animate="visible" variants={variants} className={theme.lname}>
                    {name.lname}
                </motion.h1>
            </motion.div>
        </div>
    );
}

export default LandingPage;
