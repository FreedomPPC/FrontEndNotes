/***
 * 自定义路由
 */
var React=require('react');
var ReactDOM=require('react-dom');
var Router={
	router:function(event){
		var _path=event.target.getAttribute("data-path");
		var _view=event.target.getAttribute("data-view");
		var _types=_view.substring(0,1);
		var _node=_view.substring(1,_view.length);//得到dom的i,class
		var _nodes;//得到的dom节点
		switch(_types){
			case "#":
			_nodes=document.getElementById(_node);
			console.log(_nodes);
			break;
			case ".":
			_nodes=document.getElementsByClassName(_node)[0];
			console.log(_nodes);
			break;
		}
		this.unmountComponentByNodes(_nodes);
		this.mountComponentByPath(_path,_nodes);
	},
	unmountComponentByNodes:function(nodes){
		 ReactDOM.unmountComponentAtNode(nodes);
	},
	mountComponentByPath:function(path,nodes){
		 ReactDOM.render(React.createElement(require('.'+path+'.js')),nodes);
	}
}
module.exports=Router;