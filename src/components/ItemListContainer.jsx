import React from "react";

function ItemListContainer(props) {
  return (
    <div className="myGreeting">
      <h4>{props.greeting}</h4>
    </div>
  );
}

export default ItemListContainer;
