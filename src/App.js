import React from "react";

import Header from "./Header";
import Main from "./Main";
import DeliveryOptions from "./DeliveryOptions";
import FoodStuffs from "./FoodStuffs";

import "./App.css"; 

//make all of these individual components

const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <div className="panel">
        <DeliveryOptions foodOptions={FoodStuffs}/>
      </div>
    </>
  );
};
export default App;
