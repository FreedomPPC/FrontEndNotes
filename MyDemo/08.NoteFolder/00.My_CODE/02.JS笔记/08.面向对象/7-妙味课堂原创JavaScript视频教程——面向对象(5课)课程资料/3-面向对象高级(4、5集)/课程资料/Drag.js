function Drag(id)
{
	var _this=this;
	
	this.disX=0;
	this.disY=0;
	this.oDiv=document.getElementById(id);
	
	this.oDiv.onmousedown=function (ev)
	{
		_this.fnDown(ev);
		
		return false;
	};
}

Drag.prototype.fnDown=function (ev)
{
	var _this=this;
	var oEvent=ev||event;
	this.disX=oEvent.clientX-this.oDiv.offsetLeft;
	this.disY=oEvent.clientY-this.oDiv.offsetTop;
	
	document.onmousemove=function (ev)
	{
		_this.fnMove(ev);
	};
	
	document.onmouseup=function ()
	{
		_this.fnUp();
	};
};

Drag.prototype.fnMove=function (ev)
{
	var oEvent=ev||event;
	
	this.oDiv.style.left=oEvent.clientX-this.disX+'px';
	this.oDiv.style.top=oEvent.clientY-this.disY+'px';
};

Drag.prototype.fnUp=function ()
{
	document.onmousemove=null;
	document.onmouseup=null;
};