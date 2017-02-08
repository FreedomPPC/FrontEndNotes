//1.在安装babel-presets-2015这个loader之前的写法
// var config = require('./config.json');
// module.exports = function () {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// }


//2.es6 和react 混合写法,要先装react 和 react-dom;
import React,{Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';
class Greeter extends Component{
    render(){
        return(
            <h1>
                {config.greetText}
            </h1>
        )
    }
}

export default Greeter
