var PubSub = (function(){
	var events = {};
	return {
      	on : function(etype,efn){
      		events[etype]||(events[etype]=[]);
      		events[etype].push(efn);
      	},
      	off : function(etype){
      		events[etype] = [];
      	},
      	trigger : function(etype,data){
      		if(events[etype]){
      			events[etype].forEach(function(efn){
      				efn(data);
      			});
      		}
      	}
      }
})();