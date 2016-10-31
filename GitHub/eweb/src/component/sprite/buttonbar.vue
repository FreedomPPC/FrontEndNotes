<template>
    <div :class="btnCss.buttonbar">
        <btn v-for="one in buttons"  @click="btnClickHandler(one)" :iconname="one.icon?one.icon:''" :btnname="one.type?one.type:'btn-default'">{{one.name}}</btn>
    </div>
</template>

<script>
import btnCss from "./buttonbar.css";
import btn from "component/sprite/button.vue";
export default {
  props:{
      buttons:{
        type: Array,
        default: () => []
      },

      events:{
        type: Object,
        default: function(){
          return {
            btnClick: function(){}
          }
        }
      }
  },
  data: function () {
    return {
      btnCss
    }
  },
  computed: {},
  ready: function () {
  },
  attached: function () {},
  methods: {
    btnClickHandler: function(one){
        this.events.btnClick.call(this._context, one);
        this.$dispatch("btnclick", one);
    }
  },
  components: {btn}
}
</script>
