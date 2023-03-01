//import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola, bienvenido👋🏽" />
    </div>
  );
}
export default App;
