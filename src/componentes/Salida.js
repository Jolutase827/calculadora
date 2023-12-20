import React from "react";
import './../hojas-estilos/Salida.css';

function Salida({ total }){
    return (
        <div className="col-12 salida ps-3 pe-3">
            <h1 className="text-end col-12">{ total }</h1>
        </div>
    )
}

export default Salida;