import React from "react";

function Ticket(props) {
  return (
    <div className="BoletoPng">

      <span className="nombre">
        {props.name}
      </span>
        <span className="numero">

            {props.numero}

        </span>

    </div>
  );
}

export default Ticket;
