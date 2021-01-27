import React from "react";
import './App.css';
import {Card} from "reactstrap";
import Header from "./Components/mainHeader/header"



import MainFooter from "./Components/mainFooter/mainFooter"

function App() {
  return (
    <div className="App">
      <Card>
      <Header/>
      </Card>

       <Card>
         <MainFooter/>
       </Card>
    </div>
  );
}

export default App;
