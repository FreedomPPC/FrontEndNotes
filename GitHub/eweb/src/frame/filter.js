export default class filter {
  init(Vue) {
    Vue.filter('dateformate',  (d, pattern) => {
      if(!d || d=="") return "";
      pattern = pattern || "yyyy-mm-dd HH:MM";
      let str = "";
      str = pattern.replace("yyyy", d.getFullYear());
      str = str.replace("mm", d.getMonth() < 9? '0' + (d.getMonth() + 1) : d.getMonth()+1);
      str = str.replace("dd", d.getDate() < 10? '0' + d.getDate() : d.getDate());
      str = str.replace("HH", d.getHours() < 10? '0' + d.getHours() : d.getHours());
      str = str.replace("MM", d.getMinutes() < 10? '0' + d.getMinutes() : d.getMinutes());
      return str;
    })

    // 仅返回整数类型
    Vue.filter('intonly', {
          read: function (val) {
             return val;
           },
         // this will be invoked before writing to
         // the model.
         write: function (val, oldVal) {
             if(isNaN(val*1)) return oldVal
             else if(val*1 < 0) return oldVal
             else return Math.ceil(val)
         }
    })
  }
}
