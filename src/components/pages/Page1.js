import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Page1 extends Component{
    constructor(props){
        super(props);

        //Props from React-Router
        console.log(this.props);
    }

    render(){
        return (
            <div className="page1">
                This is page one
                <br />
                <Link to="/page2">Go to Page 2</Link>

            </div>
        )
    }
}

export default Page1;