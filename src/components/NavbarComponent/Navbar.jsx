import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

    return(
        <>
            <div className="navbar-container">
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
            </div>
        </>
    );
}

export default Navbar;