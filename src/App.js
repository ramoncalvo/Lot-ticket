import React from 'react';
import Boleto from './assets/boleto';
import Pdf from "react-to-pdf";
import './App.css';
const ref = React.createRef();

const users = [
  {
    name: "Rigoberto Sanchez Vilchis",
    numero: "5854"
  },
  {
    name: "Pedro Sola Almazan",
    numero: "9526"
  },
  {
    name: "Rosa VillaNueva Esperon",
    numero: "84525"
  }
 
];

const options = {
    orientation: 'landscape'
};

function App() {
  const [folio, setFolio] = React.useState(0);

  function startPdf() {
    var elem = document.getElementById('generate');
    let event = new Event("click");
    console.log('start pdf button')
        elem.click();

  }

  return (
    <div className="App">
       <div className="App">
       <div>
        <button onClick={ () => startPdf() }>Start PDF process</button>
       </div>
      <Pdf targetRef={ref} options={options} filename={folio + ".pdf"}>
        {({ toPdf }) => <button id="generate" onClick={toPdf}>Generate Pdf</button>}
        
      </Pdf>
      <div ref={ref}>

        {users.map((user, index) => (
          <div key={index}>
            <Boleto name={user.name} numero={user.numero} />
            
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
