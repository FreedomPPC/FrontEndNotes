;(function(root){
	var events = {};
	root.PubSub = {
      	on : function(etype,dom,efn){
      		events[etype]||(events[etype]=[]);
      		events[etype].push({
      			ctx : dom,
      			fn  : efn
      		});
      	},
      	off : function(etype,dom){
      		events[etype] = [];
      	},
      	trigger : function(etype,dom,data){
      		if(events[etype]){
      			events[etype].forEach(function(info){
      				if(info.ctx===dom){
      					info.fn(data,etype,dom);
      				}
      			});
      		}
      	}
      }
})(this);