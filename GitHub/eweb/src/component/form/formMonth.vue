<template>
    <div :class="[css.formOne, classname, vertical?css.verticalitem:'']">
        <label for=""  :class='css.labelDesc'>{{labelname}}</label>
        <div :class="css.formtarget">
            <datemonth  :value="value"  :stopdate="stopdate" :startdate="startdate" @monthclick="monthclick"></datemonth>
            <div :class="css.errorMsg" v-show="error">
                {{errormsg}}
            </div>
        </div>
    </div>
</template>

<script>
import css from "./formItem.css";
import mixin from "common/mixinForm.js";
import datemonth from "component/datemonth/dateMonth";
export default {
  mixins: [mixin],
  props:{
    startdate:{     // 月份选择的区间限制的 起始日期

    },
    startdate:{    // 月份选择的区间限制的 结束日期

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
      monthclick: function(value) {
         this.$set("error", false);
         this.$set("value", value);
      }
  },
  components: {datemonth},
  watch:{
    "validatestart":function() {
       if(this.watchIgnore) return false;
       this.$dispatch("onvalidate", {res:"success", msg: "验证成功", value:this.value, name: this.formname});
    }
  }
}
</script>
