import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user-actions';
import { createSelector, createStructuredSelector } from 'reselect';

class App extends Component{
  constructor(props){
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount(){
      this.props.onApiRequest();
  }

  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }

  render(){

    return (
      <div>
        <div>Webpack React/Redux/Reselect Application template</div>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}



// const mapStateToProps = (state, props) => {
//   console.log('mapStateToProps',props);
//   return {
//     products: state.products,
//     user: state.user,
//   }
// };

const productSelector = createSelector(
  state => state.products,
  products => products
);

const userSelector = createSelector(
  state => state.user,
  user => user
);

// const mapStateToProps = createSelector(
//   productSelector,
//   userSelector,
//   (products,user) => ({
//     products,
//     user
//   })
// );

const mapStateToProps = createStructuredSelector({
  products: productSelector,
  user: userSelector
});

// const mapActionsToProps = (dispatch, props) => {
//   console.log('mapActionsToProps',props);
//   return bindActionCreators({ onUpdateUser: updateUser }, dispatch)
// };

const mapActionsToProps =  {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
};

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log('mergeProps',propsFromState, propsFromDispatch, ownProps);
//   return {}
// };

//export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);
export default connect(mapStateToProps, mapActionsToProps)(App);