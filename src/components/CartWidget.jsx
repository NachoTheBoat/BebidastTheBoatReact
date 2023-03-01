import React from "react";
import { BsFillCartFill } from "react-icons/bs";

export default function CartWidget() {
  return (
    <span className="CartIcon">
      <span className="CounterCart">0</span> <BsFillCartFill />
    </span>
  );
}
