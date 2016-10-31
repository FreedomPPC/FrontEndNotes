<template>
    <div :class="[css.formOne, classname, vertical?css.verticalitem:'']">
        <label for="" :class='css.labelDesc'>{{labelname}}</label>
        <div :class="css.formtarget">
            <input type="text" name="name" :value="value" :placeholder="placeholder" :disabled="read" @keydown="keyDownHandler" v-model="value" @focus="focusHandler">
            <div :class="css.errorMsg" v-show="error">
                {{errormsg}}
            </div>
        </div>
    </div>
</template>

<script>
import css from "./formItem.css";
import mixin from "common/mixinForm.js";
export default {
  mixins: [mixin],
  props:{
      placeholder:{
        type:String,
        default:"请填写"
      },

      read:{
        type:Boolean,
        default: false
      },
      // 文本输入框的验证规则
      number:{      // 只能输入数字验证
        type: Boolean,
        default: false
      },

      length: {   // 输入长度验证
        default: 0
      },

      decemal:{    // 小数位验证
        type: Number,
        default: 0
      },

      email:{
        type: Boolean,
        default: false
      },

      phone:{
        type: Boolean,
        default: false
      }
  },
  data: function () {
    return {
      css
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    keyDownHandler: function(e){
      console.log(e.keyCode);
      if(e.keyCode == 8) return true;  // 回退
      if(this.number && !this.numberValidate(e.keyCode)) {
        // if(e.keyCode == 229) {  // 中文验证
        //    var tp = this.value;
        //    setTimeout(() => { this.$set("value", tp); });
        // }
        e.preventDefault(); return false;
      }
      if(this.length) {
        if(this.length*1 == this.value.length) {e.preventDefault(); return false;}
      }
    },

    focusHandler: function(){
      this.$set("error", false);
    },

    numberValidate: function(code){
        return (code >= 49 && code <= 57) || (code >= 96 && code <= 105)
    }
  },
  components: {},
  watch:{
    "validatestart":function() {
       if(this.watchIgnore) return false;
        // 判断验证邮件格式
        if(this.email) {
            if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.value)) {
              this.$dispatch("onvalidate", {res:"fail", msg: "邮箱格式不正确"});
              this.$set("errormsg", "邮箱格式不正确");
              this.$set("error", true);
              return false;
            }
        }
        // 判断验证手机格式
        else if(this.phone) {
            if(!/^1[3|4|5|7|8]\d{9}$/.test(this.value)) {
              this.$dispatch("onvalidate", {res:"fail", msg: "手机号格式不正确"});
              this.$set("errormsg", "手机号格式不正确");
              this.$set("error", true);
              return false;
            }
        }
        // 判断验证小数位
        else if(this.decemal) {
            let rep = "/^[0-9]+(.[0-9]{"+this.decemal+"})$/";
            rep = eval(rep);
            if(!rep.test(this.value)) {
              this.$dispatch("onvalidate", {res:"fail", msg: "小数位格式不正确"});
              this.$set("errormsg", "小数位格式不正确");
              this.$set("error", true);
              return false;
            }
        }
        else if(this.number) {
            if(isNaN(this.value)) {
              this.$dispatch("onvalidate", {res:"fail", msg: "只允许填写数字"});
              this.$set("errormsg", "只允许填写数字");
              this.$set("error", true);
              return false;
            }
        }
        // 自定义验证
        if(this.validatefun && typeof(this.validatefun) == "function") {
            let result = this.validatefun.call(this._context, this.value);
            if(result.res == "fail") {
              this.$set("errormsg", result.msg);
              this.$set("error", true);
              return false;
            }
        }
        this.$dispatch("onvalidate", {res:"success", msg: "验证成功", value:this.value, name: this.formname});
    }
  }
}
</script>
