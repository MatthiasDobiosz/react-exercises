import React from "react";
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export const Login = ({addUserData}) => {

    let navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const validateInput = () =>{
        if(userName===""||userEmail===""||userPassword===""){
            setErrorMessage("Please fill out all fields!");
        }
        else if(!userEmail.match(/^[a-zA-Z0-9.! #$%&'*+=? ^_`{|}~-]+@[a-zA-Z0-9-]+/)){
            setErrorMessage("Invalid Email!");
        }
        else if(userPassword !== "test1234"){
            setErrorMessage("Wrong Password!");
        }
        else{
            setErrorMessage("");
            addUserData(userName, userEmail);
            let path = '/Logout';
            navigate(path);
        }

    }

    return(
        <>
            <div className="Login-Container">
                <h2> Login </h2>
                <p className="error-message">{errorMessage}</p>
                <form>
                    <label htmlFor="fname" className="name-label">Name:</label>
                    <input type="text" id="fname" title="Name:" className="name-input" onChange={e=>setUserName(e.target.value)} ></input>
                    <label htmlFor="femail" className="email-label"> E-mail: </label>
                    <input type="text" id="femail" className="email-input" onChange={e=>setUserEmail(e.target.value)}></input>
                    <label htmlFor="fpassword"> Password: </label>
                    <input type="password" id="fpassword" className="password-input" onChange={e=>setUserPassword(e.target.value)}></input>
                </form>
                <button className="Login-button" onClick={validateInput}>Login</button>
            </div>
        </>
    );
}