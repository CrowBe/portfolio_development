import React from 'react';
import projectManagementScreenshots from '../../../assets/images/projectManagementScreenshots.png';
import appScreenshots from '../../../assets/images/appScreenshots.png';

const ScreenshotContent = () => {
    return (
        <div className="screenshotContent">
            <h2>Screenshots</h2>
            <h3>Apps</h3>
            <div className="appScreenshots">
                <img src={appScreenshots} alt="website search bar contact form login/logout and homepage project screenshots"></img>
            </div>
            <h3>Project Management</h3>
            <div className="projectManagementScreenshots">
                <img src={projectManagementScreenshots} alt="trello balsamiq monday.com project tool screenshots"/>
            </div>
        </div>
    );
};

export default ScreenshotContent;