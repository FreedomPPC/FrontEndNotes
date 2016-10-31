<template>
    <div :class="dCss.dialogBox"  v-show="modalshow" transition="fadeModal">
        <div :class="dCss.dialogIn">
          <div :class="[dCss.dialog, 'bounce']">
                <div :class="dCss.dialogTitle">
                    {{title}}
                    <span :class="dCss.close" @click="hide"><icon iconname="icon-close" ></icon></span>
                </div>

                <div :class="dCss.dialogContent">
                    <slot name='containerDialog'>这是内容</slot>
                </div>

                <div :class="dCss.dialogFooter">
                    <slot name="footerDialog">
                        <!-- <button type="button" name="button">确定</button>
                        <button type="button" name="button"  @click="hideShow">取消</button> -->
                        <btnbar :buttons="buttons" :events="btnEvent"></btnbar>
                    </slot>
                </div>
          </div>
        </div>
    </div>
</template>

<script>
import dCss from "./dialog.css";
import icon from "component/sprite/icon";
import btnbar from "component/sprite/buttonbar";
export default {
  props:{
    flag: {                           // 控制对话框显示和隐藏外部开关
      type: Boolean,
      default: false
    },
    modalshow: {                     // 控制对话框显示和隐藏内部开关
      type: Boolean,
      default: false
    },
    events:{
      type: Object,
      default: function(){
        return {
          footerClick: function(d){

          }
        }
      }
    },
    buttons:{
      type: [],
      default: () => [{name:"确定", icon:"icon-check", action:"confirm"},{name:"关闭", icon:"icon-close1", action:"close"}],
    },
    title:{                          // 标题
      type: String,
      default:"标题"
    }
  },
  data: function () {
    return {
      dCss,
      btnEvent: {
        btnClick: function(d) {
          if(d.action == "close") this.hide()
          this.events.footerClick.call(this._context, d);
        }
      }
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    hide() {
        this.modalshow = false;
    }
  },
  watch:{
    "flag": function(){
        this.modalshow = !this.modalshow;
    }
  },
  components: {icon,btnbar}
}
</script>
