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
import styles from './Greeter.css';//css模块化
import './global.less';
var myStyle = {
  fontSize: 100,
  color: '#FF0000'
}
class Greeter extends Component{
    render(){
        return(
          <div>
            <h1 className={styles.test}>
              {config.greetText}
            </h1>
            <div id="test">
              mrs
            </div>
          </div>
        )
    }
}

export default Greeter
