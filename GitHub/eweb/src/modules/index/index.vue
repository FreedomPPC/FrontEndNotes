<template>
  <div :class="inCss.indexBox">
      <div :class="inCss.indexIn">
        <div :class="inCss.indexLeft">
                <div :class="inCss.levelBox">
                      <panel :classname='inCss.panelhalf'>
                          <div slot="panelTitle">
                                 代办事项
                                 <div :class='inCss.operator'>
                                      <icon iconname="icon-left3"></icon>
                                      <icon iconname="icon-right3"></icon>
                                 </div>
                          </div>
                          <div slot="panelContent">
                            xxxx
                          </div>
                      </panel>

                      <panel  :classname='inCss.panelhalf'>
                          <div slot="panelTitle">
                                 培训附件
                                 <div :class='inCss.operator'>
                                      <icon iconname="icon-left3"></icon>
                                      <icon iconname="icon-right3"></icon>
                                 </div>
                          </div>
                          <div slot="panelContent">
                            xxxx
                          </div>
                      </panel>
                </div>
        </div>
        <div :class="inCss.indexRight">
                <div :class="inCss.levelBox">
                  <panel :classname='inCss.panelall'>
                      <div slot="panelTitle">
                             公告栏
                             <div :class='inCss.operator'>
                                  <icon iconname="icon-left3"></icon>
                                  <icon iconname="icon-right3"></icon>
                             </div>
                      </div>
                      <div slot="panelContent">
                        xxxx
                      </div>
                  </panel>
                </div>
        </div>
      </div>
  </div>
</template>

<script>
import {setTitle} from "actions/index.js";
import inCss from "./index.css";
import panel from "component/panel/panel";
import icon from "component/sprite/icon.vue";
export default {
  data: function () {
    return {
      inCss
    }
  },
  computed: {},
  ready: function () {
    this.$nextTick(function () {
      // console.log(this.$el);
      $("body").css("background-color", "#e6e6e6");
    })
  },

  detached(){
      $("body").css("background-color", "white");
  },
  created: function () {

  },

  route:{
    data: function(){
      setTitle(this.$store, "首页");
    }
  },

  methods: {},
  components: {panel,icon}
}
</script>
