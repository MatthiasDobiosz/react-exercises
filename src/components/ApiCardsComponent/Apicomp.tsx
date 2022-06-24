import React, { useEffect, useState } from "react";
import { getApiData } from "../../services/getApiData";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./Apicomp.css";
export const Apicomp = () => {

    const [game, setGame] = useState("");
    const [gameData, setGameData] = useState({});

    const searchGame = (game) => {
        if(game !== ""){
            try{
                getApiData(game).then(response => {
                    setGameData(response);
                })
            }
            catch(e){
                console.log(e);
            }
        }
        else{
            setGame([]);
            alert("no valid game entered");
        }
    }
    return(
        <>
            <InputGroup className="searchbar">
                <FormControl
                onChange={(e) => setGame(e.target.value) }
                className="searchfield"
                placeholder="search game"
                aria-label="serach game"
                aria-describedby="basc-addon2"
                />
                <Button onClick={() => searchGame(game)}className="btn-primary" variant="primary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
            {gameData && (
                <p>{gameData.type}</p>
            )}
        </>
    );
}

