import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionsCreators } from 'redux';
import { incraseCounter, decreaseCounter } from  '../../actions/counter-actions';
import ProductsList from '../Products/ProductsList';

class Products extends Component{
  constructor(props){
    super(props);

    //Props from React-Router

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