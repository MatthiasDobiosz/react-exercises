import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

export const Logout = ({userData}) => {

    let navigate = useNavigate();
    
    const navigateLogin = () =>{
        let path="/";
        navigate(path);
    }

    return(
        <>
            <div className="Logout-Container">
                <p>Hey {userData.name}! {`(${userData.email})`}</p>
                <button className="logout-button" onClick={navigateLogin}>Logout</button>
            </div>
        </>
    );
};