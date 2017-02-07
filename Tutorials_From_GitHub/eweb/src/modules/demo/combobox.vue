<template>
      <panel>
          <div slot="panelTitle">
                下拉组件， 自定义datas
          </div>
          <div slot="panelContent">
              <combobox labelname="name" keyid="rid"  :datas="datas" :value.sync="value"></combobox>
          </div>
          <div slot="panelFooter">
              <div class="">
                    参数值：{{value}} <i>（详细参数，控件里面已注释）</i>
              </div>
          </div>
      </panel>

      <panel>
          <div slot="panelTitle">
                级联组件， 自定义datas
          </div>
          <div slot="panelContent">
              <combocascade :pid.sync="pid" :cid.sync="cid" :aid.sync="aid"></combocascade>
          </div>
          <div slot="panelFooter">
              <div class="">
                  pid: {{pid}}--cid: {{cid}}--aid: {{aid}}
              </div>
          </div>
      </panel>
</template>

<script>
import combobox from "component/combobox/combobox";
import combocascade from "component/combobox/combocascade";
import {setTitle} from "actions/index.js";
import panel from "component/panel/panel";
export default {
  data: function () {
    return {
      value: 4,
      pid:1,
      cid:1,
      aid:2,
      datas:[{"rid":"1","name":"盗墓笔记","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"48000","tboxoffice":"48000"},{"rid":"2","name":"爱宠大机密","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"19500","tboxoffice":"19500"},{"rid":"3","name":"绝地逃亡","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"11400","tboxoffice":"85100"},{"rid":"4","name":"夏有乔木 雅望天堂","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"9060","tboxoffice":"9499"},{"rid":"5","name":"封神传奇","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"7700","tboxoffice":"27900"},{"rid":"6","name":"泰山归来：险战丛林","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"2530","tboxoffice":"30430"},{"rid":"7","name":"我最好朋友的婚礼","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"2380","tboxoffice":"2380"},{"rid":"8","name":"神秘世界历险记3","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"2050","tboxoffice":"6020"},{"rid":"9","name":"寒战2","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"605","tboxoffice":"67955"},{"rid":"10","name":"哆啦A梦：新·大雄的日本诞生","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"565","tboxoffice":"10325"}]
    }
  },
  route:{
    data: function(){
      setTitle(this.$store, "下拉");
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    panel, combobox,combocascade
  }
}
</script>
