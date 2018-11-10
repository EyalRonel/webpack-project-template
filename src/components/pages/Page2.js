import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            </div>
        )
    }
}

export default Page2;