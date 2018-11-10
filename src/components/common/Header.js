import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Header extends Component{
    constructor(props){
        super(props);

        console.log('Header',props);
    }

    render(){
        return(
            <div className="header"></div>
        )
    }
}

export default withRouter(Header);


