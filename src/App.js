import React from "react";

import "./App.css"; 

const App = () => {
  return (
    <>
      <div className="Header">
        <div className="Title">
          <h1>Lambda Eats</h1>
        </div>
        <div className="Navigation">
          <h4 className="Nav-link"/**put on click */>Home</h4>
          <h4 className="Nav-link"/**put on click */>Help</h4>
        </div>  
      </div>
    </>
  );
};
export default App;
