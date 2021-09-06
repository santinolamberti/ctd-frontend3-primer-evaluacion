import React from "react";
import Anteriores from "./anteriores";
import data from "./data.json"
import Opciones from "./opciones";

export default class Historia extends React.Component{
    constructor(props){
        super(props);
        this.state={
            frase:[]
        }
    }

    componentDidMount = () => (
        this.setState({frase: data[0].historia})
    )

render(){
    return(
        <div className="layout">
              <h1 className="historia">{this.state.frase}</h1>
              <Opciones />
              <Anteriores />
              </div>
    )
}
}
