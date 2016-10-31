var React=require('react');
var ReactDOM=require('react-dom');

/**注册组件的layout 分成 registerHeader,registerBody两个部分,并渲染在主页面的banner中**/
var ComponentRegister=React.createClass({
	render:function(){
		return(
			<div>
			   <div id="registerHeader"></div>
			   <div id="registerBody"></div>
			</div>
		);
	}
});
/**注册组件的layout 分成 registerHeader,registerBody两个部分,并渲染在主页面的banner中**/

/**注册组件的header 开始**/
var ComponentRegisterHeader=React.createClass({
	render:function(){
		var _css=this.CSS;
		var _back="<";
		return(
			<div style={_css.div}>
			   <div style={_css.back}>{_back}</div> 
			   <div style={_css.font}>注册</div>
			</div>
		);
	}
});
ComponentRegisterHeader.prototype.CSS={
	div:{
		width:"100%",
		height:"0.84rem",
		backgroundColor:"rgb(255,218,68)",
		overflow:"hidden"
	},
	back:{
		float:"left",
		fontSize:"0.6rem",
		fontWeight:"500",
		letterSpacing:"0.2rem",
		textAlign:"center",
		lineHeight:"0.84rem",
		marginLeft:"0.3rem"
	},
	font:{
		float:"left",
		fontSize:"0.36rem",
		fontWeight:"500",
		width:"6.6rem",
		letterSpacing:"0.2rem",
		textAlign:"center",
		lineHeight:"0.84rem",
	}
}
/**注册组件的header 结束**/


/**注册组件的body 开始**/
var ComponentRegisterBody=React.createClass({
	handleClick:function(event){
		
		ReactDOM.unmountComponentAtNode(document.getElementById("registerBody"));
		ReactDOM.render(<ComponentRegisterBodyNext/>,document.getElementById("registerBody"));
	},
	render:function(){
		var _css=this.CSS;
		return(
			<div style={_css.div}>
			   <div style={_css.tool}>
			      <div style={_css.toolOne}>
			         我要钱
			      </div>
			      <div style={_css.toolTwo}>
			         我要流量
			      </div>
			   </div>
			   <div style={_css.input}>
			     <input type="text" placeholder="请输入手机号" style={_css.inputs}/>
			   </div>
			   <div onClick={this.handleClick} style={_css.btn}>下一步</div>
			   <div style={_css.aggre}>是否同意条款<span style={_css.span}>平台服务协议</span></div>
			</div>
		);
	}
});
ComponentRegisterBody.prototype.CSS={
	div:{
		width:"100%",
		overflow:"hidden"
	},
	tool:{
		width:"6.9rem",
		height:"0.68rem",
		margin:"0.48rem auto",
		display:"flex"
	},
	toolOne:{
		width:"50%",
		height:"100%",
	    textAlign:"center",
	    lineHeight:"0.68rem",
	    fontSize:"0.3rem",
	},
	toolTwo:{
		width:"50%",
		height:"100%",
	    textAlign:"center",
	    lineHeight:"0.68rem",
	    fontSize:"0.3rem",
	},
	input:{
		width:"6.9rem",
		height:"0.68rem",
		margin:"0.36rem auto"
	},
	btn:{
		width:"6.9rem",
		height:"0.7rem",
		margin:"0.6rem auto",
		backgroundColor:"rgb(255,218,68)",
		fontSize:"0.36rem",
		textAlign:"center",
		lineHeight:"0.7rem",
	},
	inputs:{
		display:"block",
		width:"100%",
		height:"100%",
		border:"none",
		fontSize:"0.3rem",
		outline:"none"
	},
    aggre:{
		width:"6.9rem",
		height:"0.4rem",//416 396
		margin:"0.16rem auto",
		fontSize:"0.28rem",
		textAlign:"left",
		lineHeight:"0.4rem",
		color:"rgb(153,153,153)"
	},
	span:{
		fontSize:"0.28rem",
		color:"rgb(51,51,52)",
		textDecoration:"underline"
	}
	

}
/**注册组件的body 结束**/



/**注册组件的下一步  开始**/
var ComponentRegisterBodyNext=React.createClass({
	render:function(){
		var _css=this.CSS;
		return(
			<div style={_css.div}>
			   <div style={_css.tool}>
			      请输入手机号152#####6915的验证码
			   </div>
			   <div style={_css.input}>
			     <input type="text" placeholder="请输入验证码" style={_css.inputs}/>
			   </div>
			   <div onClick={this.handleClick} style={_css.btn}>完成</div>
			   <div style={_css.aggre}>是否同意条款<span style={_css.span}>平台服务协议</span></div>
			</div>
		);
	}
});
ComponentRegisterBodyNext.prototype.CSS={
	div:{
		width:"100%",
		overflow:"hidden"
	},
	tool:{
		width:"6.9rem",
		height:"0.32rem",
		margin:"0.2rem auto",
		display:"flex",
		lineHeight:"0.32rem",
		fontSize:"0.28rem",
		textAlign:"center",
		display:"block",
		color:"rgb(51,51,52)",
	},
	
	input:{
		width:"6.9rem",
		height:"0.68rem",
		margin:"0.2rem auto"
	},
	btn:{
		width:"6.9rem",
		height:"0.7rem",
		margin:"0.32rem auto",
		backgroundColor:"rgb(255,218,68)",
		fontSize:"0.36rem",
		textAlign:"center",
		lineHeight:"0.7rem",
	},
	inputs:{
		display:"block",
		width:"100%",
		height:"100%",
		border:"none",
		fontSize:"0.3rem",
		outline:"none"
	},
    aggre:{
		width:"6.9rem",
		height:"0.4rem",//416 396
		margin:"0.16rem auto",
		fontSize:"0.28rem",
		textAlign:"left",
		lineHeight:"0.4rem",
		color:"rgb(153,153,153)"
	},
	span:{
		fontSize:"0.28rem",
		color:"rgb(51,51,52)",
		textDecoration:"underline"
	}
	

}
/**注册组件的下一步  结束**/


var Register={};
Register.root=ComponentRegister;
Register.header=ComponentRegisterHeader;
Register.body=ComponentRegisterBody;

Register.next=ComponentRegisterBodyNext;

module.exports=Register;