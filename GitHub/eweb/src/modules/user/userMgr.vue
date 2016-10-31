<template>
    <div :class="epCss.userBox">
        <pagepanel classname="needpadding" direct="bottom">
              <div :class="epCss.userSearch">
                <search  pathname="" :datas="sdata" :events = 'searchEvents'></search>
              </div>
        </pagepanel>
        <pagepanel>
              <btnbar :buttons="btnsData" :events="btnEvents"></btnbar>
              <div class="">
                <tb :headercaption="headercaption" :loadtag="loadtag" :datas="testData" :events="tableEvents"></tb>
              </div>
              <pg :totals="100" :size="10"></pg>
        </pagepanel>


        <dialog :flag="flagdep">
              <div class="" slot="containerDialog">
                  这是内容区域
              </div>
        </dialog>
    </div>
</template>

<script>
import {setTitle} from "actions";
import epCss from "./user.css";
import search from "component/search/search";
import tb from "component/grid/tableListBase";
import pagepanel from "component/panel/pagepanel";
import btnbar from "component/sprite/buttonbar";
import dialog from "component/dialog/dialog";
import pg from "component/pagination/pagination";
export default {
  data: function () {
    return {
      epCss,
      flagdep: false,
      headercaption:[{name:"用户名", labelValue:"type", type:"data"},{name:"角色", labelValue:"orderid",type:"data"}, {name:"状态", labelValue:"cash",type:"data", attr:"price"},
                    {name:"创建人", labelValue:"account",type:"data"}, {name:"创建时间", labelValue:"name", type:"data"},
                    {type:"operator", name:"操作"}],
      loadtag: false,
      testData:[{type:"110202222219201", orderid:"卡拉", status: 1},{type:"1102019201", orderid:"卡拉", status:2}],
      searchEvents:{
        onSearch: function(params) {
            // this.$set("params", params);
            // this.loadtag = !this.loadtag;
        }
      },

      tableEvents:{
        operatorRender: function(d){
          let bdatas = [{name:"密码重置", action:"rebuild",icon:"icon-key", id:d.type},{name:"编辑", action:"edit",icon:"icon-edit", id:d.type}];
          if(d.status == 1) bdatas.unshift({name:"启用", action:"open", icon:"icon-check", id:d.type})
          else bdatas.unshift({name:"禁用", action:"forbidden", icon:"icon-forbidden", id:d.type});
          return bdatas;

        },
        operatorHandler: function(d){
          if(d.action == "open") {
            d.action = "forbidden";d.name = "禁用";d.icon = "icon-forbidden";
          }
          else if(d.action == "forbidden") {
            d.action = "open";d.name = "启用";d.icon = "icon-check";
          }
        }
      },

      dialogEvents:{
        footerClick: function(d){
          console.log(d);
        }
      },
      btnsData:[{name:"新增", icon:"icon-add", action:"add"},{name:"导出", icon:"icon-share", action:"export"}],
      btnEvents:{
        btnClick: function(d){
            if(d.action == "add") this.flagdep = !this.flagdep;
        }
      }
    }
  },
  computed: {
    sdata: function(){
      let q = this.$route.query;
      return [{type:"text",  value:q.username || "",  keyname:"username", labelcaption:"用户名:"},
              {type:"text",  value:q.status || "",  keyname:"status", labelcaption:"用户状态:"},
              {type:"daterange",  keynamestart:"start", keynameend:"end", start:q.start || "",  end:q.end || "", formate:"yyyy-mm-dd", labelcaption:"员工姓名:"}];
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {search,tb,pagepanel,btnbar,dialog, pg},
  route:{
    data: function(){
      setTitle(this.$store, "用户管理");
    }
  }
}
</script>
