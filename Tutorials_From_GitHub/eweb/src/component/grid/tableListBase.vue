<template>
  <div :class="tableCss.tableBox" :style="stylein">
    <table :class="classname">
        <thead>
              <tr>
                <th v-for="tone in headercaption" :style="tone.style">
                      <input type="checkBox" name="name" value="" v-if="tone.checkbox" :class='tableCss.checkTag' @click="checkAll">
                      {{tone.name}}
                      <span  v-if="tone.sort">升序</span>
                      <span  v-if="tone.sort">降序</span>
                </th>
              </tr>
        </thead>
        <tbody  v-show="loading? false:noresult? false: true">
              <tr v-for="(order, done)  in dataList" :class="order%2 == 1? tableCss.active:''">
                    <!--id-->
                    <td  v-for="sone in headercaption" :class="tableCss[sone.attr]">
                          <input type="checkBox" name="name" value="" v-if="sone.checkbox"  :class='tableCss.checkTag' v-model="checked">
                          <span v-if="sone.type == 'data'" ><span v-if="sone.attr == 'price'">￥</span>{{done[sone.labelValue]}}</span>
                          <span v-if="sone.type == 'index'" >{{order + 1}}</span>
                          <span v-if="sone.type == 'operator'" >
                                <btnbar :buttons="btnData(done)"  @btnclick="btnEventHandler"></btnbar>
                          </span>
                    </td>
              </tr>
        </tbody>
    </table>
    <div v-show="noresult" :class='tableCss.noresult'>
          没有数据
    </div>
    <div v-show="loading"  :class='tableCss.loading'>
          加载中...
    </div>
  </div>
</template>

<script>
import Utils from "common/Utils";
import tableCss from "./tableCss.css";
import btnbar from "component/sprite/buttonbar";
export default {
  props:{
    classname:{
      type:String,
      default: tableCss.tablelist
    },
    loadtag:{
      type: Boolean,
      default: true
    },
    stylein:{
      type:Object,
      default: () => {}
    },
    codevalue:{
      type:String,
      default:"id"
    },
    // 头信息
    headercaption:{             // [{name:"姓名", labelValue:"name", checkBox: true, type:"data", sort: true, attr:""}, {type:"operator", name:"操作"}]
      type:Array,
      default:() => []
    },

    url:{
      type:String
    },

    params:{
      type:Object,
      default:() => {}
    },

    events: {
      type: Object,
      default:function(){
        return {operatorHandler: function(data){}, operatorRender: function(){return []}}
      }
    },

    datas:{
      type:Array,
      default:() => []
    }
  },
  data: function () {
    return {
        tableCss,
        dataList: this.datas || [],
        noresult: false,
        loading:true,
        checked: false
        // btnEvents:{
        //   btnClick: function(d){
        //       this.events.operatorHandler.call(this._context, d)
        //   }
        // }
    }
  },



  computed: {

  },

  created: function(){
    this.headercaption.unshift({type:"index"});
    if(this.dataList.length != 0) this.$set("loading", !this.loading);
  },

  ready: function () {},
  attached: function () {},
  methods: {
    btnEventHandler: function(d){
      this.events.operatorHandler.call(this._context, d)
    },
    btnData: function(one){
        return   this.events.operatorRender.call(this._context, one);
    },
    adapertData(d){
        if(!d.data || d.data.length == 0) {this.noresult = true; this.loading = false; return false;}
        // console.log(d);
        this.dataList = [];
        for (var i = 0; i < d.data.length; i++) {
            let one = d.data[i];
            let rowData = {};
            for (var j = 0; j < this.headercaption.length; j++) {
              var hone = this.headercaption[j];
              if(hone.type == "data") rowData[hone.labelValue] = {name: one[hone.labelValue], checkbok: hone.checkbox}
              else if(hone.type == "operator") rowData["operator"] = {name: hone.labelCaption, id:one[this.codevalue]}
            }
            this.dataList.push(rowData);
        }
        // this.dataList.push();
          this.$set("loading", false);
    },

    checkAll: function(){
        this.$set("checked", !this.checked);
    },

    loadData: function() {
      return this.$http.get(this.$Api+ (this.url || ""),{params:this.params}).then((res) => {
        console.log(res);
          // 如果有数据 就渲染
         //  如果没有数据就显示没有数据
          this.adapertData({data: []});
      },(error) =>{
        console.log(error);
      })
    },

    operatorHandler(id, action){
        // this.$dispatch("table_action", {id: id, action:action}); // 发射事件
        this.events.operatorHandler.call(this._context, action, id);
    }
  },
  components: {btnbar},


  watch:{
    // "params": function(){
    //     this.tableShow = false;
    //     this.loadData();
    // },
    "loadtag": function(){
      this.$set("loading", true);
      this.$set("noresult", false);
      this.loadData();
    }
  }
}
</script>
