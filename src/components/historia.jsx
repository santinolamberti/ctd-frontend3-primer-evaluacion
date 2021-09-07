import React from "react";
import Anteriores from "./anteriores";
import data from "./data.json"
import Opciones from "./opciones";
import Swal from "sweetalert2";



export default class Historia extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todo: data,
            id: 1,
            actual: data[0],
            anterior: "",
            historial: []
        }
    }

    


    handleOpciones = (e) => {
        const idUpdated = this.state.id + 1;
        const option = idUpdated + e.target.id;
        const optionUpdate = data.find(i => i.id == option)
        const opcion = e.target.value
        if(optionUpdate != null){
        this.setState ({
            id: idUpdated,
            actual: optionUpdate,
            anterior: opcion,
            historial: [...this.state.historial, e.target.value]
        })}else{
            Swal.fire({
                icon: 'success',
                title: 'Primer parcial finalizado',
                showConfirmButton: false,
                timer: 3000
              })
        }

    }


render(){
    return(
        <div className="layout">
              <h1 className="historia">{this.state.actual.historia}</h1>
              <Opciones handleOpciones={this.handleOpciones} op={this.state.actual.opciones}/>
              <Anteriores anterior={this.state.anterior} historial={this.state.historial.map((eleccion, i) => <li key={i}>{eleccion}</li>)}/>
              </div>
    )
}
}
