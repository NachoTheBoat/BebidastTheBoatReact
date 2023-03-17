import React from "react";
import CartWidget from "./CartWidget";
import { Route } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <h1>Bebidas The Boat ⛵</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">contacto</a>
          </li>
          <li>
            <a href="#">productos</a>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </header>
  );
}
