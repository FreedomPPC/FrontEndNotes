/**声明入口文件开始**/
var React=require('react');
var ReactDOM=require('react-dom');

//require every components
var ComponentLayout=require('./ComponentLayout.js');
var ComponentHeader=require('./ComponentHeader.js');
var ComponentBanner=require('./ComponentBanner.js');
var ComponentList=require('./ComponentList.js');
var ComponentFooter=require('./ComponentFooter.js');
var ShareGoldFinger = require('./ShareGoldFinger.js');

//render every component
ReactDOM.render(<ComponentLayout/>,document.getElementById("app"));
ReactDOM.render(<ComponentHeader/>,document.getElementById("header"));
ReactDOM.render(<ComponentBanner/>,document.getElementById("banner"));
ReactDOM.render(<ComponentList/>,document.getElementById("list"));
ReactDOM.render(<ComponentFooter/>,document.getElementById("footer"));
ReactDOM.render(<ShareGoldFinger/>,document.getElementById("share"))
/**声明入口文件结束**/