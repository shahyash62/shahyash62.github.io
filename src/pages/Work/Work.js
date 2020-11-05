import React from 'react';
import theme from './Work.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import resume from './resume.pdf';

function Work({ position, fallingObj }) {
    return (
        <div style={position.work} className={theme.container}>
            <div className={theme.dataContainer}>
                <div className={theme.panel}>
                    <section className={`${theme.panelSection} ${theme.panelHeadingSection}`}>
                        <h3 className={theme.panelHeader}>
                            <FontAwesomeIcon icon={faBriefcase} /> My work history to gauge me by.
                        </h3>
                    </section>
                    <section className={`${theme.panelSection} ${theme.panelContentSection}`}>
                        <ul className={theme.panelList}>
                            <li className={`${theme.panelListItem} ${theme.panelListItemContainer}`}>
                                <p className={`${theme.panelTextSmall} ${theme.panelListHeader}`}>
                                    <span>Express Scripts Inc / Global Data Management</span> <span className={theme.dates}>(April 2020 - Current)</span>
                                </p>
                                <ul className={theme.panelList}>
                                    <li className={theme.panelListItem}>
                                        - Re-engineering a legacy web application using React JS and Java Spring-Boot which will serve 50,000+ users per day.
                                    </li>
                                    <li className={theme.panelListItem}>- Used Jest and Enzyme extensively for unit testing.</li>
                                    <li className={theme.panelListItem}>
                                        - Worked in an agile and continuous integration environment facilitated by Jira and Jenkins.
                                    </li>
                                </ul>
                            </li>
                            <li className={`${theme.panelListItem} ${theme.panelListItemContainer}`}>
                                <p className={`${theme.panelTextSmall} ${theme.panelListHeader}`}>
                                    <span>Express Scripts Inc / Global Data Management</span> <span className={theme.dates}>(Oct 2019 - Dec 2019)</span>
                                </p>
                                <ul className={theme.panelList}>
                                    <li className={theme.panelListItem}>
                                        - Re-engineered the excel based application to develop a React based web SPA which increased the user's efficiency by
                                        20%.
                                    </li>
                                    <li className={theme.panelListItem}>- Consumed JSON data over multiple REST API’s using axios (FETCH API).</li>
                                </ul>
                            </li>
                            <li className={`${theme.panelListItem} ${theme.panelListItemContainer}`}>
                                <p className={`${theme.panelTextSmall} ${theme.panelListHeader}`}>
                                    <span>Global Data Management Inc.</span> <span className={theme.dates}>(May 2016 - Sept 2017)</span>
                                </p>
                            </li>
                            <li className={`${theme.panelListItem} ${theme.panelListItemContainer}`}>
                                <p className={`${theme.panelTextSmall} ${theme.panelListHeader}`}>
                                    <span>Bhavin Steel Pvt Ltd</span> <span className={theme.dates}>(June 2016 - July 2017)</span>
                                </p>
                            </li>
                        </ul>
                        <p className={theme.panelTextSmall}>
                            <a href={resume}>Find more details on my resume</a>
                        </p>
                    </section>
                </div>
            </div>
            {fallingObj}
        </div>
    );
}

export default Work;
