import React from "react";
import onlyNetflix from "../../img/only-on.gif"
function mid01(){
    return(
        <div  className="center" className="main01">
            <p>
                <h1 className="mainH1mid01">Enjoy on your TV.</h1>
                <p>Watch on Smart TVs, Playstation, Xbox, <br/>
                    Chromecast, Apple TV, Blue-Ray players, and <br/> more.
                </p>
            </p>
           
            <img src={onlyNetflix} className="onlyon"/>
        </div>
    )
}

export default mid01;