import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';


export default class Recipe extends Component {
    constructor(props){
      super(props)
      }
    static getDerivedStateFromProps(props) {
        const {params} = props.location.state;
        return {
          id: params.id,
          name: params.name,
          recipe: params.recipe,
          formColor: params.formColor
        }
    }
    render(){
        return(
          <div style={{backgroundColor: this.state.formBgColor}}>
            <h1>Recipe Details for {this.state.name}</h1>  
            <p>{this.state.recipe}</p>
            <Link to="/foodItems">Go Back To Food Items Page</Link>
          </div>
        )
    }
}
