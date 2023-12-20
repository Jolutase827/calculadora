import './App.css';
import imagen1 from './imagenes/imagen1.png'
import Salida from './componentes/Salida';
import { useState } from 'react';
import Boton from './componentes/Boton';
import BotonBorrar from './componentes/BotonBorrar';
import { evaluate } from 'mathjs';
function App() {
  const [resultado,setResultado]= useState('0');
  const num1 = (num)=>{
    if(resultado === '0'){
      setResultado(num);
    }else{
      setResultado(resultado + num);
    }
  }
  const equal = ()=>{
    if(resultado)
      setResultado(evaluate(resultado));
    else
      alert('No hay nadaaaa');
    
  };
  const borrar = ()=>{
    setResultado('0');
  }
  return (
    <div className="App">
      <div className='col-12 d-flex flex-column align-items-center pt-5'>
        <img
          className='col-3'
          src={imagen1}
          alt='Logo'
        />
        <div className='col-2 calculadora rounded mt-5 p-2'>
          <Salida 
            total={ resultado }
          />
          <div className='col-12 d-flex justify-content-around'>
            <Boton
              gestionClic={ num1 }
            >1</Boton>
            <Boton
              gestionClic={ num1 }
            >2</Boton>
            <Boton
              gestionClic={ num1 }
            >3</Boton>
            <Boton
              gestionClic={ num1 }
            >+</Boton>
          </div>
          <div className='col-12 d-flex justify-content-around'>
            <Boton
              gestionClic={ num1 }
            >4</Boton>
            <Boton
              gestionClic={ num1 }
            >5</Boton>
            <Boton
              gestionClic={ num1 }
            >6</Boton>
            <Boton
              gestionClic={ num1 }
            >-</Boton>
          </div>
          <div className='col-12 d-flex justify-content-around'>
            <Boton
              gestionClic={ num1 }
            >7</Boton>
            <Boton
              gestionClic={ num1 }
            >8</Boton>
            <Boton
              gestionClic={ num1 }
            >9</Boton>
            <Boton
              gestionClic={ num1 }
            >*</Boton>
          </div>
          <div className='col-12 d-flex justify-content-around'>
            <Boton
              gestionClic={ equal }
            >=</Boton>
            <Boton
              gestionClic={ num1 }
            >0</Boton>
            <Boton
              gestionClic={ num1 }
            >.</Boton>
            <Boton
              gestionClic={ num1 }
            >/</Boton>
          </div>
          <BotonBorrar
            gestionClic={ borrar }
          >Borrar</BotonBorrar>

        </div>

      </div>
    </div>
  );
}

export default App;
