import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser, apiRequest } from '../actions/user-actions';
import { createSelector, createStructuredSelector } from 'reselect';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Child Components
 * */
import Page1 from  './pages/Page1';
import Page2 from  './pages/Page2';
import Map from './common/Map';
import Temp from './common/Temp';

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
        <Router>
            <div className="app">
              <Switch>
                <Route exact path="/" component={Page1} />
                  <Route exact path="/page2" component={Page2} />
                <Route exact path="/temp/:id?" component={Temp} />
                <Route exact path="*" component={() => (<h3>No Found</h3>)} />
              </Switch>
            </div>
        </Router>
    );
  }
}

/*<div>Webpack React/Redux/Reselect Application template</div>*/
/*<input onChange={this.onUpdateUser} />*/
/*{this.props.user}*/

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