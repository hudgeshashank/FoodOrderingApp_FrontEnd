import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Controller from './screens/Controller';
import Header from './common/header/Header';
import Home from './screens/home/Home';
import 'typeface-roboto';

ReactDOM.render(
    <Home />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
