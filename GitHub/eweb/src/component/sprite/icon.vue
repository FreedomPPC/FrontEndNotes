<template>
    <span :class='[iconCss.iconBox, classname]'>
        <span :class='[iconCss.iconfont, iconCss[iconname], iconCss[attach]]'></span>
        <span :class='iconCss.iconlabel' v-show="iconlabel">{{iconlabel}}</span>
    </span>
</template>

<script>
import iconCss from "./icon.css";
export default {
  props:{
    classname:{

    },
    iconname:{                        // 图标样式
    },

    attach:{                          // 附属样式
      type:String,
      default: "small"
    },

    iconlabel:{
      type:String
    }
  },
  data: function () {
    return {
      iconCss
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>
