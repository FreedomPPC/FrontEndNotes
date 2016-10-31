<template>
    <div :class="[css.formOne, classname, vertical?css.verticalitem:'']">
        <label for=""  :class='css.labelDesc'>{{labelname}}</label>
        <div :class="css.formtarget">
            <combobox :keyid="keyid" :labelname="keyname"  :datas="datas" :value="value" @dropclick="dropclick"></combobox>
            <div :class="css.errorMsg" v-show="error">
                {{errormsg}}
            </div>
        </div>
    </div>
</template>

<script>
import css from "./formItem.css";
import mixin from "common/mixinForm.js";
import combobox from "component/combobox/combobox";
export default {
  mixins: [mixin],
  props:{
    keyid:{     // 月份选择的区间限制的 起始日期
        default:"id"
    },
    keyname:{
        default:"name"
    },
    datas: {
      default:[]
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
      dropclick: function(value) {
         this.$set("error", false);
         this.$set("value", value);
      }
  },
  components: {combobox},
  watch:{
    "validatestart":function() {
       if(this.watchIgnore) return false;
       this.$dispatch("onvalidate", {res:"success", msg: "验证成功", value:this.value, name: this.formname});
    }
  }
}
</script>
