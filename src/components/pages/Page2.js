import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionsCreators } from 'redux';
import { incraseCounter, decreaseCounter } from  '../../actions/counter-actions';

class Page2 extends Component{
    constructor(props){
        super(props);

        //Props from React-Router
        console.log(this.props);
    }

    render(){
        return (
            <div className="page2">
                This is page two
                <br />
                <Link to="/">Go to Page 1</Link>
                <br />
                <button onClick={() => this.props.incraseCounter() }>increase</button>
                <button onClick={() => this.props.decreaseCounter()}>decrease</button>
                Counter value: {this.props.counterValue}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counterValue: state.counter
});

// const mapDispatchToProps = (dispatch) => ({
//     incraseCounter,
//     decreaseCounter
// });

const mapDispatchToProps = {
    incraseCounter,
    decreaseCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);