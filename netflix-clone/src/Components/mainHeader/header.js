import React from "react";
import {Button} from "reactstrap"
import {Card} from "reactstrap";
import Mid01 from "../mainMid/mainMid01"
import Mid02 from "../mainMid/mainMid02"
import Mid03 from "../mainMid/mainMid03"
import Mid04 from "../mainMid/mainMid04"
import NetflixLogo from "../../img/netflix-logo.png"
function mainHeader(){
    return(
        <div className="mainHeader">
            <img src={NetflixLogo} className="netflixLogo"/>
            <Button color="danger">Sign in</Button>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create ro restart your membership.</p>
            <form>
                <input type="text" name="email" placeholder="Email address"></input> 
                <Button color="danger">GET STARTED</Button>
            </form>

            <Card>
                <Mid01/>
            </Card>

            <Card>
                <Mid02/>
            </Card>

            <Card>
                <Mid03/>
            </Card>

            <Card>
                <Mid04/>
            </Card>

        </div>
    )
}

export default mainHeader;