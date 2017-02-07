<template>
      <panel>
          <div slot="panelTitle">
                弹框
          </div>
          <div slot="panelContent">
                <button type="button" name="button" @click="changeDialog">点击</button>
          </div>
          <div slot="panelFooter">

          </div>
      </panel>

      <panel>
          <div slot="panelTitle">
               复选框
          </div>
          <div slot="panelContent">
                <checkbx :datas="checkDatas" defaultkey="1,2" checkname="fruits" ></checkbx>
          </div>
          <div slot="panelFooter">

          </div>
      </panel>

      <panel>
          <div slot="panelTitle">
               单选框
          </div>
          <div slot="panelContent">
                <radiobx :datas="rDatas" checkname="fruits" defaultkey="2"></radiobx>
          </div>
          <div slot="panelFooter">
          </div>
      </panel>

      <dialog :flag="flagdep">
            <div class="" slot="containerDialog">
                这是内容区域
            </div>
      </dialog>
</template>

<script>
import checkbx from "component/checkbox/checkBox.vue";
import radiobx from "component/radiobox/radioBox.vue";
import dialog from "component/dialog/dialog";
import panel from "component/panel/panel";
import {setTitle} from "actions/index.js";
import pageBase from "common/mixinPage.js";
export default {
  mixins:[pageBase],
  data: function () {
    return {
      flagdep: false,
      checkDatas: [{label:"苹果", id:1, checked: false}, {label:"香蕉", id:2, checked: false}, {label:"菠萝", id:3, checked: false}],
      rDatas: []
    }
  },
  computed: {},
  ready: function () {

  },
  attached: function () {

  },
  route:{
    data: function(){
      setTitle(this.$store, "对话框");
    }
  },
  methods: {
    changeDialog() {
          this.flagdep = !this.flagdep;
    },

    dealFun(){
      for (var i = 0; i < 10; i++) {
        this.rDatas.push({label:"苹果", id:i, checked: false})
      }
    }
  },
  components: {
    panel, dialog,checkbx,radiobx
  }
}
</script>
