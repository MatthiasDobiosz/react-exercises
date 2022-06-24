import React, { useEffect, useState } from "react";
import "./searchfilter.css"

const words = ["Apple", "Mango", "Dieter", "Mangomon", "Crypto", "Applejuice", "Applemango"];



const Searchfilter = () => {
    const [term, setTerm] = useState(" ");
    const [filteredWords, setFilteredWords] = useState([]);

    const changeTerm = (e) => {
        setTerm(e.target.value);
    }

    useEffect(() => {
        console.log(term);
        setFilteredWords(words.filter( word  => {
            return term!==""?word.startsWith(term):false;
        }))
    }, [term])
    return(
        <>
            <div className="searchbar">
                Search: <input type="text" onChange={e =>changeTerm(e)} className="searchbar-input"/>
            </div>
            <div className="search-list">
                <li className="wordlist">
                    {filteredWords.map((word, index) => {
                        return(
                            <ul className="word" key={index}>{word}</ul>
                        );
                    })}
                </li>
            </div>
        </>
    );
}

export default Searchfilter;