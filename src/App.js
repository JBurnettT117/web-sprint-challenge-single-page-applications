import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import DeliveryOptions from "./DeliveryOptions";
import FoodStuffs from "./FoodStuffs";
import PizzaForm from "./PizzaForm";

import "./App.css"; 

//make all of these individual components

const App = () => {
  return (
    <>
      <Header/>
      <Route exact path="/">
        <Main/>
        <div className="panel">
          <DeliveryOptions foodOptions={FoodStuffs}/>
        </div>
      </Route>
      <Route path="/pizza">
        <PizzaForm/>
      </Route>
    </>
  );
};
export default App;
