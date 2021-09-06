import React from "react";
import data from "./data.json"

export default class Opciones extends React.Component{

      render(){
          return (
              
              <div className="opciones">
              <div className="opcion" >
              <button className="botones">A</button>
              <h2>primera opcion</h2>
              </div>
              <div className="opcion" >
              <button className="botones">B</button>
              <h2>segunda opcion</h2>
              </div>
              </div>
          )
      }
}