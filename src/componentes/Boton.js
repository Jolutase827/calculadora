import React from "react";
import './../hojas-estilos/Boton.css';

function Boton(props){
    return (
        <button className="rounded" onClick={ ()=>props.gestionClic(props.children) }>{ props.children }</button>
    )
}

export default Boton;