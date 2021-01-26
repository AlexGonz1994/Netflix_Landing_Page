import React from "react";
import './App.css';
import {Card} from "reactstrap";
import Header from "./Components/mainHeader/header"

// import Mid01 from "./Components/mainMid/mainMid01"
// import Mid02 from "./Components/mainMid/mainMid02"
// import Mid03 from "./Components/mainMid/mainMid03"
// import Mid04 from "./Components/mainMid/mainMid04"

import MainFooter from "./Components/mainFooter/mainFooter"

function App() {
  return (
    <div className="App">
      <Card>
      <Header/>
      </Card>

     {/* <Card>
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
       </Card> */}

       <Card>
         <MainFooter/>
       </Card>
    </div>
  );
}

export default App;
