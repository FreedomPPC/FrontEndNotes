<template>
<div class="">

    <panel>
        <div slot="panelTitle">
             表单 - 文本输入测试
        </div>
        <div slot="panelContent">
              <formtext labelname="姓名：" value="伟哥" placeholder="请输入姓名" :read="true" formname='name' length='5' :validatestart="validate" @onvalidate="validateHandler"></formtext>
              <formtext labelname="年龄：" placeholder="请输入年龄" :validatefun="ageValidate" formname='age'  length='3' :number="true" :validatestart="validate"  @onvalidate="validateHandler"></formtext>
              <formtext labelname="邮箱：" placeholder="请输入邮箱"  formname='mail' :email="true" :validatestart="validate"  @onvalidate="validateHandler"></formtext>
              <formtext labelname="手机号：" placeholder="请输入手机号"  formname='phone' :phone="true" :validatestart="validate"  @onvalidate="validateHandler"></formtext>

              <formck labelname="水果1：" formname="friut" value="1" :datas="cdata" :validatestart="validate" @onvalidate="validateHandler"></formck>
              <formrd labelname="水果2：" formname="friut2" value="2" :datas="bdata" :validatestart="validate" @onvalidate="validateHandler"></formrd>

              <datem labelname="月份：" formname="month"   :validatestart="validate" @onvalidate="validateHandler"></datem>

              <formdt labelname="日子：" formname="day"   :validatestart="validate" @onvalidate="validateHandler"></formdt>
              <daterg  labelname="范围：" :must="false" :validatestart="validate" @onvalidate="validateHandler"></daterg>

              <formcb keyid="rid" labelname="电影：" keyname="name" formname="cinimal" :datas="datas" :validatestart="validate" @onvalidate="validateHandler"></formcb>
        </div>
        <div slot="panelFooter">
            <span @click="chan">xxxx</span>
            <div class="">
                  {{formData | json}}
            </div>
        </div>
    </panel>


</div>
</template>

<script>
import formtext from "component/form/formText";
import formck from "component/form/formCheckBox";
import formrd from "component/form/formRadio";
import formdt from "component/form/formDate";
import datem from "component/form/formMonth";
import daterg from "component/form/formRangeDate";
import formcb from "component/form/formComboBox";
import {setTitle} from "actions/index.js";
import panel from "component/panel/panel";
export default {
  data: function () {
    return {
      validate: false,

      formData:{},
      cdata:[{label:"苹果", id:1, checked: false}, {label:"香蕉", id:2, checked: false}, {label:"菠萝", id:3, checked: false}],
      bdata:[{label:"苹果", id:1, checked: false}, {label:"香蕉", id:2, checked: false}, {label:"菠萝", id:3, checked: false}],
      datas:[{"rid":"1","name":"盗墓笔记","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"48000","tboxoffice":"48000"},{"rid":"2","name":"爱宠大机密","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"19500","tboxoffice":"19500"},{"rid":"3","name":"绝地逃亡","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"11400","tboxoffice":"85100"},{"rid":"4","name":"夏有乔木 雅望天堂","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"9060","tboxoffice":"9499"},{"rid":"5","name":"封神传奇","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"7700","tboxoffice":"27900"},{"rid":"6","name":"泰山归来：险战丛林","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"2530","tboxoffice":"30430"},{"rid":"7","name":"我最好朋友的婚礼","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"2380","tboxoffice":"2380"},{"rid":"8","name":"神秘世界历险记3","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"2050","tboxoffice":"6020"},{"rid":"9","name":"寒战2","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"605","tboxoffice":"67955"},{"rid":"10","name":"哆啦A梦：新·大雄的日本诞生","wk":"2016.8.1- 2016.8.7（单位：万元）","wboxoffice":"565","tboxoffice":"10325"}]

    }
  },
  route:{
    data: function(){
      setTitle(this.$store, "表单");
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    validateHandler: function(d) {
      if(d.res == "success") {
        this.formData[d.name] = d.value
      }
      this.$set("formData", Object.assign({}, this.formData));
    },

    ageValidate: function(value) {
      let f = value.slice(0, 1);
      if(f == "0") return {res:"fail", msg:"年龄第一位不能是0"}
      return true;
    },
    chan: function(t){
       this.validate = !this.validate
    }

  },
  components: {formtext,panel, formck, formrd, datem,formdt,daterg,formcb}
}
</script>
