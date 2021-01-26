import React from "react";
import onlyNetflix from "../../img/only-on.gif"
function mid01(){
    return(
        <div className="center">
            <h1>Enjoy on your TV.</h1>
            <p>Watch on Smart TVs, Playstation, Xbox, 
                Chromecast, Apple TV, Blue-Ray players, and more.</p>
            <img src={onlyNetflix} className="onlyon"/>
        </div>
    )
}

export default mid01;