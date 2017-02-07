<template>
    <div :class="[css.formOne, classname, vertical?css.verticalitem:'']">
        <label for=""  :class='css.labelDesc'>{{labelname}}</label>
        <div :class="css.formtarget">
            <daterange :start.sync="start"  :end.sync="end" :formate="formate" @rangechange="rangechange"></daterange>
            <div :class="css.errorMsg" v-show="error">
                {{errormsg}}
            </div>
        </div>
    </div>
</template>

<script>
import css from "./formItem.css";
import mixin from "common/mixinForm.js";
import daterange from "component/datepicker/dateRange";
export default {
  mixins: [mixin],
  props:{
    start:{     // 起始日期
        default:""
    },
    end:{    // 结束日期
        default:""
    },

    formate:{
      type:String,
      default:"yyyy-mm-dd"
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
      rangechange: function(d) {
         this.$set("error", false);
         this.$set(d.name, d.value);
      }
  },
  components: {daterange},
  watch:{
    "validatestart":function() {
      console.log(this.value);
       if(this.watchIgnore) return false;
       if(!this.start || this.start == "") {
           this.$dispatch("onvalidate", {res:"fail", msg: "起始日期必须填写"});
           this.$set("errormsg", "起始日期必须填写");
           this.$set("error", true);
           return false;
       }
       else if(!this.end || this.end == "") {
           this.$dispatch("onvalidate", {res:"fail", msg: "结束日期必须填写"});
           this.$set("errormsg", "结束日期必须填写");
           this.$set("error", true);
           return false;
       }
       this.$dispatch("onvalidate", {res:"success", msg: "验证成功", value:this.start, name: "start"});
       this.$dispatch("onvalidate", {res:"success", msg: "验证成功", value:this.end, name: "end"});
    }
  }
}
</script>
