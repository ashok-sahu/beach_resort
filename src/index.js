import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import {RoomProvider} from './Context_state/context' 

ReactDOM.render(
    <RoomProvider>
        <Router>
            <App/>
        </Router>
    </RoomProvider>
,document.getElementById('root'));


