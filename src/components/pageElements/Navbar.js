import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="NavBar" >
            <Link to="/">
                <div className='homeIcon' >
                </div>
            </Link>
            <Link to="/aboutme">
                <h2>About</h2>
            </Link>
            <Link to="/projects">
                <h2>Projects</h2>
            </Link>
        </div>
    );
}

export default NavBar;