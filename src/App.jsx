import { useState } from "react";
import "./App.css";
import ChickenTab from "../chickenTab.json";
import NavBar from "./componants/NavBar";
import Main from "./componants/main";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Main />
      </div>
    </>
  );
}

export default App;
