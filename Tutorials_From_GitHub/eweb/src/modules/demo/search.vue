<template>
      <panel>
          <div slot="panelTitle">
                查询
          </div>
          <div slot="panelContent">
                <search  pathname="/demo/search" :datas="sa" :events = 'searchEvents'></search>
                <tablelist :headercaption="headercaption" codevalue="_id" :params="params" :loadtag="loadtag" url="" :events="tableClick"></tablelist>
          </div>
          <div slot="panelFooter">
              {{params | json}}
          </div>


      </panel>

</template>

<script>
import search from "component/search/search";
import tablelist from "component/grid/tableListBase";
import panel from "component/panel/panel";
import {setTitle} from "actions/index.js";
export default {
  data: function () {
    return {
      headercaption:[{name:"序号", labelValue:"_id", type:"data"},{name:"系列", labelValue:"catery",type:"data"}, {name:"联系人", labelValue:"contact",type:"data", attr:"price"},
                    {name:"地址", labelValue:"detailAddresses",type:"data"},{name:"电话", labelValue:"phone",type:"data"}, {name:"区域id", labelValue:"areaId", type:"data"},
                    {name:"供应商", labelValue:"providerName",type:"data"},{type:"operator", name:"操作", labelCaption:[{name:"删除", action:"delete"},{name:"编辑",action:"edit"}]}],
      loadtag: false,
      searchEvents:{
        onSearch: function(params) {
            this.$set("params", params);
            this.loadtag = !this.loadtag;
        }
      },

      tableClick: {
        operatorHandler: function(type, id) {
          console.log(this);
          console.log(type);
          console.log(id);
        }
      },

      params:{}


    }
  },
  route:{
    data: function(){
      setTitle(this.$store, "查询");
    }
  },
  computed: {
    sa: function(){
      let q = this.$route.query;
      return [
       {type:"cascade", pid:q.pid || 1, cid:q.cid || 1, aid:q.aid || 1, labelcaption:"地址"},
       {type:"daterange", keynamestart:"start", keynameend:"end", start:q.start || "", end:q.end || "", formate:"yyyy-mm-dd", labelcaption:"范围选择"}, // 级联地址
       {type:"text", limit:"", num:"", value:q.detail || "",  keyname:"detail", labelcaption:"详细地址"},
       {type:"datepicker", keyname:"datename", value:q.datename || "", startdate:"", stopdate:"", formate:"yyyy-mm-dd", labelcaption:"日期"},
       {type:"datemonth", keyname:"monthDate", value:q.monthDate || "", startdate:"", stopdate:"", formate:"yyyy-mm-dd", labelcaption:"月选择"},
       {type:"combobox", keyname:"name", labelname:"name", keyid:"id", value:q.name || "", datas:[{name:"test",id:1},{name:"test1",id:2}], labelcaption:"下拉"}]
    }
  },
  ready: function () {
    this.loadtag = !this.loadtag;
  },
  attached: function () {},
  methods: {
  },
  components: {
    panel, search, tablelist
  },
  watch:{
  }
}
</script>
