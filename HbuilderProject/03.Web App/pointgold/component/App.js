var React=require('react');
var ReactDOM=require('react-dom');

//require every components
var ComponentLayout=require('./ComponentLayout.js');
var ComponentHeader=require('./ComponentHeader.js');
var ComponentBanner=require('./ComponentBanner.js');
var ComponentMenu=require('./ComponentMenu.js');
var ComponentFooter=require('./ComponentFooter.js');

//render every component
ReactDOM.render(<ComponentLayout/>,document.getElementById("app"));
ReactDOM.render(<ComponentHeader/>,document.getElementById("header"));
ReactDOM.render(<ComponentBanner/>,document.getElementById("banner"));
ReactDOM.render(<ComponentMenu/>,document.getElementById("menu"));
ReactDOM.render(<ComponentFooter/>,document.getElementById("footer"));