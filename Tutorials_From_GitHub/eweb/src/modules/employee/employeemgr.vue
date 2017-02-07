<template>
    <div :class="epCss.empBox">
        <pagepanel classname="needpadding" direct="bottom">
              <div :class="epCss.empSearch">
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
import epCss from "./employee.css";
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
      headercaption:[{name:"员工编号", labelValue:"type", type:"data"},{name:"员工姓名", labelValue:"orderid",type:"data"}, {name:"职位", labelValue:"cash",type:"data", attr:"price"},
                    {name:"联系方式", labelValue:"date",type:"data"},{name:"创建人", labelValue:"account",type:"data"}, {name:"创建时间", labelValue:"name", type:"data"},
                    {type:"operator", name:"操作"}],
      loadtag: false,
      testData:[{type:"1102019201", orderid:"卡拉"},{type:"1102019201", orderid:"卡拉"}],
      searchEvents:{
        onSearch: function(params) {
            // this.$set("params", params);
            // this.loadtag = !this.loadtag;
        }
      },

      tableEvents:{
        operatorRender: function(d){
          return [{name:"编辑",action:"edit",icon:"icon-edit"},{name:"删除", action:"delete",icon:"icon-delete"}]
        },
        operatorHandler: function(d){
          console.log(d);
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
      return [{type:"text",  value:q.jobname || "",  keyname:"jobname", labelcaption:"职位:"},
              {type:"text",  value:q.empcode || "",  keyname:"empcode", labelcaption:"员工编号:"},
              {type:"text",  value:q.empname || "",  keyname:"empname", labelcaption:"员工姓名:"}];

    }
  },
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {search,tb,pagepanel,btnbar,dialog, pg},
  route:{
    data: function(){
      setTitle(this.$store, "员工管理");
    }
  }
}
</script>
