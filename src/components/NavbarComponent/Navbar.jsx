import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { useTheme, useThemeUpdate } from "../ThemeContext";

const Navbar = () => {

    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC'
    }

    return(
        <>
            <div className="navbar-container" style={themeStyles}>
                <Link to ="/" className="navbar-title">ComponentCollection</Link>
                <ul className="category-list">
                    <li>
                        <Link
                        className="nav-category"
                        to='/' 
                        >
                            ApiCards
                        </Link>
                    </li>
                    <li>
                        <Link
                        className="nav-category" 
                        to='/accordion' 
                        >
                            Accordion
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className="nav-category"
                        to='/animatedslider' 
                        >
                            ImageSlider
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className="nav-category"
                        to='/list' 
                        >
                            List
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className="nav-category"
                        to='/counter' 
                        >
                            Counter
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className="nav-category"
                        to='/Login'
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className="nav-category"
                        to='/questionnaire'
                        >
                            Questionnaire
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className="nav-category"
                        to='/search'
                        >
                            search
                        </Link>
                    </li>
                </ul>
                <button onClick={toggleTheme} className="toggler">Toggle Darkmode</button>
            </div>
        </>
    );
}

export default Navbar;