import React from "react";

const Boleto = (props) => {
  return (
    <div className="Boleto">
        <h1>"Sorteo Chloe"</h1>
      <h2>{props.name}</h2>
      <h3>Numero de boleto: {props.numero}</h3>
    </div>
  );
};

export default Boleto;
