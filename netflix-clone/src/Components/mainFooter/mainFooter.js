import React from "react";
import image from "../../img/language_logo.png"
function mainFooter(){
    return(
        <div>
            <p>Questions? Call 1-111-111-1111</p>
            <div> 
                <p>
                    <a href="#">FAQ</a>
                </p>
                
                <p>
                    <a href="#">Investor Relations</a>
                </p>
                
                <p>
                    <a href="#">Ways to Watch</a>
                </p>
                
            <p>
            <a href="#">Corporate Information</a>
            </p>
                
            <p>
                <a href="#">Netflix Originals</a>
            </p>
            </div>

            <div>
                <p>
                    <a href="#">Help Center</a>
                </p>
                <p>
                    <a href="#"> Jobs</a>
                </p>
                <p>
                    <a href="#"> Terms of Use</a>
                </p>
                <p>
                    <a href="#"> Contact Us</a>
                </p>
            </div>

            <div>
                <p>
                    <a href="#">Account</a>
                </p>
                <p>
                    <a href="#">Redeem Gift Cards</a>
                </p>
                <p>
                    <a href="#">Privacy</a>
                </p>
                <p>
                    <a href="#">
                        Speed Test
                    </a>
                </p>
            </div>

            <div>
                <p>
                    <a href="#">Media Center</a>
                </p>
                <p>
                    <a href="#">Buy Gift Cards</a>
                </p>
                <p>
                    <a href="#">Cookie Preferences</a>
                </p>
                <p>
                    <a href="#">Legal Notices</a>
                </p>
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