import React, {useState} from "react";
import {Button} from "reactstrap"


function Mid04(){
    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    const [toggle4, setToggle4] = useState(false)
    const [toggle5, setToggle5] = useState(false)


    // let closed = "answerClosed"
    // let open = "answerOpen"
    // let current;
    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

    const toggler2 = () => {
        toggle2 ? setToggle2(false) : setToggle2(true);
    }
    const toggler3 = () => {
        toggle3 ? setToggle3(false) : setToggle3(true);
    }
    const toggler4 = () => {
        toggle4 ? setToggle4(false) : setToggle4(true);
    }
    const toggler5 = () => {
        toggle5 ? setToggle5(false) : setToggle5(true);
    }
    return(
        <div className="center">
           <h1>Frequently Asked Questions</h1>
           <ul>
               <li>
               <div onClick={toggler} className="button">What is Netflix?</div>
           {toggle ? <div className="buttonopen">
            <p>Netflix is a streaming service that offers a wide variety of 
                award-winning TV shows, movies, anime, documentaries, 
                and more on thousands of internet-connected devices.</p>
                <p>You can watch as much as you want, whenever you want 
                without a single commercial – all for one low monthly price. 
                There's always something new to 
                discover and new TV shows and movies are added every week!</p>
           </div> : <span></span>} 
               </li>

               <li className="spacing">
               <div onClick={toggler2} className="button">How much does Netflix cost?</div>
            {toggle2 ? <div className="buttonopen">
                <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or 
                    streaming device, all for one fixed monthly fee. 
                    Plans range from $8.99 to $17.99 a month. No extra costs, 
                    no contracts.</p>
            </div> : <span></span>}
               </li>

               <li className="spacing">
               <div onClick={toggler3} className="button">Where can I watch?</div>
            {toggle3 ? <div className="buttonopen">
                <p>Watch anywhere, anytime, on an unlimited number of devices. 
                    Sign in with your Netflix account to watch instantly on the web at netflix.com 
                    from your personal computer or on any internet-connected device that 
                    offers the Netflix app, including smart TVs, smartphones, tablets, 
                    streaming media players and game consoles.</p>
                    <p>You can also download your favorite shows with the iOS, Android, 
                        or Windows 10 app. Use downloads to watch while you're on the go and 
                        without an internet connection. 
                        Take Netflix with you anywhere.</p>
            </div> : <span/>}
               </li>

               <li className="spacing">
               <div onClick={toggler4} className="button">How do I cancel?</div>
            {toggle4 ? <div className="buttonopen">
                <p>Netflix is flexible. There are no pesky contracts and no commitments. 
                    You can easily cancel your account online in two clicks. 
                    There are no cancellation fees – start or stop your account anytime.</p>
            </div> : <span/>}
               </li>

               <li className="spacing">
               <div onClick={toggler5} className="button">What can I watch on Netflix?</div>
            {toggle5 ? <div className="buttonopen">
                <p>
                Netflix has an extensive library of feature films, documentaries, 
                TV shows, anime, award-winning Netflix originals, and more. 
                Watch as much as you want, anytime you want.
                </p>
            </div> : <span/>}
               </li>
           </ul>
           
                <div>
                <p className="ready">Ready to watch? Enter your email to create or restart your membership.</p>
                <input type="text" name="email" placeholder="Email Address" className="emailInput"/>
                <Button color="danger" className="getStarted">
                    <p>GET STARTED</p>
                </Button>
                </div>

        </div>
    )
}

export default Mid04;