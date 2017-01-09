const React = require('react');
const ReactDOM = require('react-dom');
const style = require('./app.css');
const MainComponent = React.createClass({
  render:function(){
    return(
      <div>
        <h1 className={style.h1}>Hello World</h1>
        <h2 className="h2">Hello Webpack</h2>
        <h1>加上这一句再打包文件，看打包出来的js的文件名的hash值会不会变，之前是app-78d2fce1a9d492b2d2cf</h1>
        <h2>结果是变了，但是项目目录会多一个打包的js</h2>
      </div>
    )
  }
});
ReactDOM.render(
  <MainComponent/>,
  document.getElementById('app')
)
