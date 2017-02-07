
let pageBase = {
        attached: function(){
            //处理复杂逻辑
            if(this.dealFun) setTimeout(()=>{this.dealFun();});
        }
   }

export default pageBase
