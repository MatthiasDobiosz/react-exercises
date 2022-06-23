import React from "react";  

const exampleList = ["Apple", "Mango", "Dieter", "Mangomon", "Crypto", "Applejuice", "Applemango"];
const List = () => {
    return( 
        <>
            <ul>
                {exampleList.map((item, index) => {
                    return(
                        <li className="list-item" key={index}>{item}</li>
                    )
                })}
            </ul>
        </>
    );
}

export default List;