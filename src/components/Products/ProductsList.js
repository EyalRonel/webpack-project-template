import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProductsList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul>
        {this.props.products.map((product,index) => {
          return (<li key={index}>{product.name}</li>)
        })}
      </ul>


    )
  }
}

export default ProductsList;