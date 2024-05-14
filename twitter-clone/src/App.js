import React from "react";

import "./App.css";
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Widgets from './Widgets';


function App() {
  return (
    //BEM
    <div className="app">
      {/* <h1>Hey Programmer.......</h1> */}

      <Sidebar/>

      <Feed/>

      <Widgets/>

    </div>
  );
}

export default App;
