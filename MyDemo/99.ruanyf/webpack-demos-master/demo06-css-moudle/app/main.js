// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());


//2.es6 + react 写法
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css';

render(<Greeter/>,document.getElementById('app'));
