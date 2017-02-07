<template>
    <div :class="acCss.accountBox">
        <pagepanel classname="needpadding" direct="bottom">
          <div :class="acCss.accountTitleBox">
              <div :class="acCss.accountTitleIn">
                <span :class='acCss.itemone'>
                      <div :class="acCss.itemTitle">账户余额:</div>
                      <div :class="acCss.itemBox">
                            <span :class='acCss.cash'>15000000</span>
                            <span :class='acCss.unit'>元</span>
                      </div>
                </span>

                <span :class='acCss.itemone'>
                      <div :class="acCss.itemTitle">账户余额:</div>
                      <div :class="acCss.itemBox">
                            <span :class='acCss.cash'>15000000</span>
                            <span :class='acCss.unit'>元</span>
                      </div>
                </span>

                <span :class='acCss.itemone'>
                      <div :class="acCss.itemTitle">账户余额:</div>
                      <div :class="acCss.itemBox">
                            <span :class='acCss.cash'>15000000</span>
                            <span :class='acCss.unit'>元</span>
                      </div>
                </span>
              </div>

              <div :class="[acCss.searchBox,'needtop']">
                      <search  pathname="" :datas="sdata" :events = 'searchEvents'></search>
              </div>
          </div>
        </pagepanel>
        <pagepanel>
              <btnbar :buttons="btnsData" :events="btnEvents"></btnbar>
              <div :class="acCss.tableIn">
                    <tb :headercaption="headercaption" :loadtag="loadtag"  :datas="testData" :events="tableEvents"></tb>
              </div>
              <pg :totals="100" :size="10"></pg>
        </pagepanel>
    </div>
</template>

<script>
import {setTitle} from "actions";
import acCss from "./account.css";
import search from "component/search/search";
import tb from "component/grid/tableListBase";
import pagepanel from "component/panel/pagepanel";
import btnbar from "component/sprite/buttonbar";
import pg from "component/pagination/pagination";
import pageBase from "common/mixinPage.js";
export default {
  mixins: [pageBase],
  data: function () {
    return {
      acCss,
      headercaption:[{name:"交易类型", labelValue:"type", type:"data"},{name:"订单号", labelValue:"orderid",type:"data"}, {name:"交易金额", labelValue:"cash",type:"data", attr:"price"},
                    {name:"交易日期", labelValue:"date",type:"data"},{name:"收款账号", labelValue:"account",type:"data"}, {name:"收款账号名称", labelValue:"name", type:"data"},
                    {type:"operator", name:"操作"}],
      loadtag: false,
      testData: [{"orderid":"xxx","name":"杭州谷鼎暖通设备有限公司","date":"xxx","type":"xxx","contact":"xxx","phone":"xxx","account":"xxx","cash":"12"},
                  {"orderid":"xxx","name":"杭州谷鼎暖通设备有限公司","date":"xxx","type":"xxx","contact":"xxx","phone":"xxx","account":"xxx","cash":"12"},
                  {"orderid":"xxx","name":"杭州谷鼎暖通设备有限公司","date":"xxx","type":"xxx","contact":"xxx","phone":"xxx","account":"xxx","cash":"12"},
                  {"orderid":"xxx","name":"杭州谷鼎暖通设备有限公司","date":"xxx","type":"xxx","contact":"xxx","phone":"xxx","account":"xxx","cash":"12"}],
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

      btnsData:[{name:"导出", icon:"icon-share", action:"export"}],
      btnEvents:{
        btnClick: function(d){
            console.log(d);
        }
      }
    }
  },
  computed: {
    sdata: function(){
      let q = this.$route.query;
      return [{type:"daterange", keynamestart:"start", keynameend:"end", start:q.start || "", end:q.end || "", labelcaption:"交易日期："}];

    }
  },
  ready: function () {
    console.log(this);
  },
  attached: function () {},
  methods: {},
  components: {search,tb,pagepanel,btnbar,pg},
  route:{
    data: function(){
      setTitle(this.$store, "分站账户管理");
    }
  }
}
</script>
