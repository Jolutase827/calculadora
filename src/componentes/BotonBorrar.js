import React from "react";
import './../hojas-estilos/BotonBorrar.css';
function BotonBorrar(props){
    return(
        <button className="rounded" onClick={ props.gestionClic }>{ props.children }</button>
    );
}
export default BotonBorrar;