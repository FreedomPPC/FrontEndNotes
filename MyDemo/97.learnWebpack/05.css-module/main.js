const React = require('react');
const ReactDOM = require('react-dom');
const style = require('./app.css');
const MainComponent = React.createClass({
  render:function(){
    return(
      <div>
        <h1 className={style.h1}>Hello World</h1>
        <h2 className="h2">Hello Webpack</h2>
      </div>
    )
  }
});
ReactDOM.render(
  <MainComponent/>,
  document.getElementById('app')
)
