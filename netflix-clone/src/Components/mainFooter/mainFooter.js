import React from "react";
import image from "../../img/language_logo.png"
function mainFooter(){
    return(
        <div className="moving">
            <p className="footer">Questions? Call 1-111-111-1111</p>
            <div className="flex1">
            <div> 
                <p>
                    <a href="#" className="display">FAQ</a>
                </p>
                
                <p>
                    <a href="#" className="display">Investor Relations</a>
                </p>
                
                <p>
                    <a href="#" className="display">Ways to Watch</a>
                </p>
                
            <p>
            <a href="#" className="display">Corporate Information</a>
            </p>
                
            <p>
                <a href="#" className="display">Netflix Originals</a>
            </p>
            </div>

            <div >
                <p>
                    <a href="#" className="display">Help Center</a>
                </p>
                <p>
                    <a href="#" className="display"> Jobs</a>
                </p>
                <p>
                    <a href="#" className="display"> Terms of Use</a>
                </p>
                <p>
                    <a href="#" className="display"> Contact Us</a>
                </p>
            </div>

            <div>
                <p>
                    <a href="#" className="display">Account</a>
                </p>
                <p>
                    <a href="#" className="display">Redeem Gift Cards</a>
                </p>
                <p>
                    <a href="#" className="display">Privacy</a>
                </p>
                <p>
                    <a href="#" className="display">
                        Speed Test
                    </a>
                </p>
            </div>

            <div>
                <p>
                    <a href="#" className="display">Media Center</a>
                </p>
                <p>
                    <a href="#" className="display">Buy Gift Cards</a>
                </p>
                <p>
                    <a href="#" className="display">Cookie Preferences</a>
                </p>
                <p>
                    <a href="#" className="display">Legal Notices</a>
                </p>
            </div>
            </div>
           

            <label for="language">
                {/* <img src={image}/> */}
            </label>
            <select name="language" id="language">
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
            </select>
        </div>
    )
}

export default mainFooter