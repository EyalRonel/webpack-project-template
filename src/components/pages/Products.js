import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsList from '../Products/ProductsList';

class Products extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="products-page">
        Welcome to the products page:
        <br />
        <ProductsList products={this.props.products}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  products: state.products
});

const mapActionsToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapActionsToProps)(Products);