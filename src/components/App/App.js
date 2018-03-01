import React, {Component} from 'react';

import Nav from 'components/Nav/Nav';
import getRouter from 'router/router';

import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                {getRouter()}
            </div>
        );
    }
}