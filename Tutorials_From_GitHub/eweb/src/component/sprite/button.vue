<template>
    <button :class="[buttonCss.btn, buttonCss[btnname]]" @click="btnClickHandler">
          <icontext :classname='buttonCss.iconscope' v-show='iconname' :iconname="iconname"  :iconlabel="falsel"></icontext>
          <span :class='buttonCss.labelName'><slot></slot></span>
    </button>
</template>

<script>
import buttonCss from "./button.css";
import icontext from "./icon.vue";
export default {
  props:{
      btnname:{
        type:String,
        default:"btn-default"
      },

      iconname:{
        default: false
      }
  },
  data: function () {
    return {
      buttonCss
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    btnClickHandler: function(){
      this.$dispatch("clickaction", '');
    }
  },
  components: {icontext}
}
</script>
