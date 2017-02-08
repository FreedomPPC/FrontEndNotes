<style>
 @import '../assets/vue-touch-keyboard.css';
.keyboard{
  margin-top: 100px;
}
ul{
  width: 500px;
}
li{
  list-style: none;
  float: left;
  padding:5px;
  margin-left:5px;
  margin-top: 5px;
  background: deepskyblue;
  border-radius: 2px;
}

</style>
<template>
  <div>
    <input type="text" placeholder="Text input" @focus="show" data-layout="normal" v-bind:value="hanzi"/>
    <input type="text" placeholder="Text input" @focus="otherInput" data-layout="compact" maxlength="18" />
    <vue-touch-keyboard class="keyboard" v-if="visible" :layout="layout" :cancel="hide" :accept="accept" :input="input"></vue-touch-keyboard>
    <div v-if="showZone">
      <ul v-for="item in items">
        <li @click="selectHanzi($index)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueTouchKeyboard from "vue-touch-keyboard";
  // import {styles} from "vue-touch-keyboard/dist/vue-touch-keyboard.css"; // load default style
  import $ from 'jquery';
  Vue.use(VueTouchKeyboard);

  export default {
    data(){
      return{
        showZone:false,
        visible: true,
        layout: "normal",
        input: null,
        options: {
          useKbEvents: false
        },
        items:[],
        hanzi:'',
      }
    },

    methods: {
        accept(text) {
          // alert("Input text: " + text);
          this.hide();
        },
        show(e) {

          this.input = e.target;
          this.layout = e.target.dataset.layout;

          if(e.target.dataset.layout == 'normal'){
            this.showZone = true;
            var tgtVal = e.target.value;
            //去中文,数字
            var reg=/[0-9\u4E00-\u9FA5]/g;
            var tgtVal = tgtVal.replace(reg,'');
            //去空格
            var reg_1 = /\s+/g;
            var tgtVal = tgtVal.replace(reg_1,'');
            var _this = this;
            if(!!e.target.value){
              _this.items = [];
              var _http="http://olime.baidu.com/py?input="+tgtVal+"&inputtype=py&bg=0&ed=20&result=hanzi&resultcoding=utf-8&ch_en=0&clientinfo=web&version=1&qq-pf-to=pcqq.discussion";
              $.ajax({
                type:"get",
                url:_http,
                async:true,
                dataType:"jsonp",
                success:function(data){
                  var _arr = data.result[0];
                  _arr.forEach(function(val,idx,arr){
                    _this.items.push(val[0]);
                  });
                },
                error:function(data){
                  // console.log("输入法请求错误");
                  // 这个输入法的Api有点小问题,当请求失败时再调用一次请求函数;
                  if(e.target.value.valueOf(" ") == -1){
                    _this.show(e);
                  }
                }
              });
            };

          }
          var nowValue = e.target.value;
          var reg = /[a-zA-Z0-9]/g;
          this.hanzi = nowValue.replace(reg,"");
          if (!this.visible)
            this.visible = true;
        },

        otherInput(e){
          this.input = e.target;
          this.layout = e.target.dataset.layout;
        },

        hide() {
          this.visible = true;
          this.showZone = false;
        },
        selectHanzi(idx){
          this.hanzi += this.items[idx];
          this.showZone = false;
        },
    },
    ready(){
    }

  }
</script>