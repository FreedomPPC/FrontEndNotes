
let  formBase = {
          props:{
                classname: {        // 传递的自定义的class
                  type:String,
                  default:"fromItem"
                },

                labelname: {      // form 的labelname
                  type: String,
                  default:""
                },

                formname:{        // form表单的参数名称
                  type:String,
                  default:"formname"
                },

                value: {        // form默认值
                  default:""
                },

                validatefun:{
                  type: Function
                },

                must:{
                  type:Boolean,
                  default: true
                },

                validatestart:{   // 验证动作开关
                  type:Boolean,
                  default: false
                },
                vertical:{
                   type:Boolean,
                   default: true
                }
          },
          data: function () {
            return {
              errormsg:"",
              error: false,
              watchIgnore: false
            }
          },
          watch: {
            "validatestart": function(){
              if(this.must) {
                if(!this.value || this.value == "") {
                  this.$dispatch("onvalidate", {res:"fail", msg: "该项必须填写"});
                  this.$set("errormsg", "该项必须填写");
                  this.$set("error", true);
                  this.$set("watchIgnore", true);
                }
                else this.$set("watchIgnore", false);
              }
            }
          }
   }

export default formBase
