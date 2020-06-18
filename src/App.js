import React from 'react';
import Boleto from './assets/ticket';
import Pdf from "react-to-pdf";
import './App.css';
import users from './assets/participantes'
const ref = React.createRef();


// const users = [
//   {
//     name: "1 Rigoberto Sanchez",
//     lastname: "",
//     numero: "5854"
//   },
//   {
//     name: "2 Pedro Sola",
//     lastname: "",
//     numero: "9526"
//   },
//   {
//     name: "3 Rosa VillaNueva",
//     lastname: "",
//     numero: "84525"
//   }
 
// ];

const options = {
    orientation: 'landscape'
};

function App() {
  let [folio, setFolio] = React.useState(0);
  let suma = 0

  function startPdf() {
    
    // console.log('numero de elementos ', users.length)
    if(suma < users.length) {
      var myVar = setInterval(myTimer, 3000);
      
      console.log('folio is ', suma)
    } else {
      clearInterval(myVar);
    }
        
  }

  function myTimer() {
    
    if(suma < users.length) {
      var elem = document.getElementById('generate');
      elem.click();
       suma++
      setFolio( suma )
      console.log('folio ', suma)
    }
   
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

        { folio < users.length ?
          <Boleto name={users[folio].name} numero={users[folio].numero} />
          : 'Se ha terminado'
        }
      </div>
    </div>
    </div>
  );
}

export default App;
