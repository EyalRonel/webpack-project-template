import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';

class App extends Component{
  constructor(props){
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }

  render(){

    return (
      <div>
        <div>Hello world!!!</div>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.producets,
    user: state.user,
  }
};

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    onUpdateUser: updateUser
  },dispatch)
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState, propsFromDispatch, ownProps);
  return {}
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);