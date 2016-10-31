<template>
    <div :class="[css.formOne, classname, vertical?css.verticalitem:'']">
        <label for=""  :class='css.labelDesc'>{{labelname}}</label>
        <div :class="css.formtarget">
            <datepicker :value="value" :formate="formate" :stopdate="stopdate" :startdate="startdate" @dayclick="dayClick"></datepicker>
            <div :class="css.errorMsg" v-show="error">
                {{errormsg}}
            </div>
        </div>
    </div>
</template>

<script>
import css from "./formItem.css";
import mixin from "common/mixinForm.js";
import datepicker from "component/datepicker/datePicker";
export default {
  mixins: [mixin],
  props:{
    startdate:{     // 起始日期

    },
    startdate:{    // 结束日期

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
      dayClick: function(value) {
         this.$set("error", false);
         this.$set("value", value);
      }
  },
  components: {datepicker},
  watch:{
    "validatestart":function() {
       if(this.watchIgnore) return false;
       this.$dispatch("onvalidate", {res:"success", msg: "验证成功", value:this.value, name: this.formname});
    }
  }
}
</script>
