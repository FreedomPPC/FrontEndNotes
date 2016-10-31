<template>
    <div :class="[css.formOne, classname, vertical?css.verticalitem:'']">
        <label for="" :class='css.labelDesc'>{{labelname}}</label>
        <div :class="css.formtarget">
            <radiobx :datas="datas" checkname="name" :events="checkEvents" :defaultkey="value"></radiobx>
            <div :class="css.errorMsg" v-show="error">
                {{errormsg}}
            </div>
        </div>
    </div>
</template>

<script>
import css from "./formItem.css";
import mixin from "common/mixinForm.js";
import radiobx from "component/radiobox/radioBox";
export default {
  mixins: [mixin],
  props:{
      datas:{
        type:Array,
        default: () => []
      }
  },
  data: function () {
    return {
      css,
      checkEvents: {
        radioClick: function(c) {
          this.$set("value", c);
          this.$set("error", false);
        }
      }
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {

  },
  components: {radiobx},
  watch:{
    "validatestart":function() {
       if(this.watchIgnore) return false;
       this.$dispatch("onvalidate", {res:"success", msg: "验证成功", value:this.value, name: this.formname});
    }
  }
}
</script>
