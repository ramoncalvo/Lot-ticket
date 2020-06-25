import React from "react";
import Boleto from "./assets/boletoPng";
import Pdf from "react-to-pdf";
import "./App.css";
import users from "./assets/participantes";
const ref = React.createRef();

const options = {
  orientation: "landscape",
};

function App() {
  let [folio, setFolio] = React.useState(0);
  let suma = 0;

  function startPdf() {
    // console.log('numero de elementos ', users.length)
    if (suma < users.length) {
      var myVar = setInterval(myTimer, 3000);

      console.log("folio is ", suma);
    } else {
      clearInterval(myVar);
    }
  }

  function myTimer() {
    if (suma < users.length) {
      var elem = document.getElementById("generate");
      elem.click();
      suma++;
      setFolio(suma);
      console.log("folio ", suma);
    }
  }

  return (
    <div>
      <div className="App">
        <div className="ui">
          <button className="btn" onClick={() => startPdf()}>
            Generar pds por lote
          </button>

          <Pdf
            targetRef={ref}
            options={options}
            filename={"numero_" + folio + ".pdf"}
          >
            {({ toPdf }) => (
              <button id="generate" onClick={toPdf}>
                Generar actual pdf
              </button>
            )}
          </Pdf>
        </div>

        <div ref={ref} className="boletoWrapped">
          {folio < users.length ? (
            <Boleto name={users[folio].nombre} numero={users[folio].numero} />
          ) : (
            "Se ha terminado"
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
