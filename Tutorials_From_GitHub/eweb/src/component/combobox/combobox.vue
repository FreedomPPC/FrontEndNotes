<template>
    <div :class="combCss.combobox" v-show="havedatas">
          <div :class="combCss.comboLabel"  @click="changeDropAction">
                  <span :class="combCss.comboLabelspan">{{defaultInfo.label}}</span>
                  <span :class='combCss.bticon'><icon iconname="icon-down"></icon></span>
          </div>
          <div :class="combCss.dropBox" v-show="dropshow">
              <div :class="combCss.dropOne" v-for="item in datas" @click="dropClick(item)">
                    {{item[labelname]}}
              </div>
          </div>
          <div :class="combCss.cover" v-show="dropshow"  @click="changeDropAction"></div>
    </div>
</template>

<script>
import combCss from "./combobox.css";
import icon from "component/sprite/icon.vue";
export default {
  props:{
      labelname:{                  // 渲染dom 显示的可见名称
        type:String,
        default:"labelname"
      },

      value:{                     // 控件的实际值 使用者需要.sync才可以同步接收
        default:0
      },

      keyid:{                     // 控件的id 依据  默认为id
        type:String,
        default:"id"
      },

      datas:{                    // combobox 数据集
        type:Array,
        default:() => []
      },

      url:{                     // 如果combobox是需要请求后台的
        type: String,
        default:""
      },

      params: {               // 请求参数
        type: Object,
        default: () => {}
      },


  },
  data: function () {
    return {
      combCss,
      dropshow: false,
      havedatas: true
    }
  },
  computed: {
    defaultInfo: function(){
      let info ={label:"请选择", key:"0"};
      if(!this.datas || this.datas.length == 0 || this.value == 0) return info;

      for(var i = 0; i < this.datas.length; i++){
        if(this.value == this.datas[i][this.keyid]) {
          info.label = this.datas[i][this.labelname];
          info.key = this.datas[i][this.keyid];
        }
      }
      return info;
    }      // 展示的默认值   不管是ajax  还是datas渲染  都要重新初始化这个值
  },
  created: function(){
    if(this.url) this.loadData();
  },
  ready: function () {},
  attached: function () {},
  methods: {
    changeDropAction(e){
        this.dropshow = !this.dropshow;
    },

    dropClick(item) {
      this.defaultInfo = {
          label:item[this.labelname], key:item[this.keyid]
      }
      this.value = item[this.keyid];
      this.changeDropAction();
      this.$dispatch("dropclick", this.value);
    },

    loadData(p) {
      p = p? p: this.params;
      return this.$http.get(this.url,{params:p}).then((res) => {
        this.datas = res.data.data;
      },(error) =>{
        console.log(error);
      })
    }
  },
  components: {icon},
  watch:{
    "params": {
      handler: function (val, oldVal) {
          this.loadData(val);
      },
      deep: true
    },
    "datas": function(){
      if(this.datas.length == 0) this.havedatas = false;
      else this.havedatas = true
    }
  }
}
</script>
