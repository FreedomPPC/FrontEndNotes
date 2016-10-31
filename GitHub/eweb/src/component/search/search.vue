<template>
    <div :class="sCss.searchinfo">
          <span v-for="one in datas" :class="sCss.searchItem">
            <!--城市级联-->
            <span v-if="one.type == 'cascade'" ><label for="">{{one.labelcaption}}</label>
              <cascade :pid.sync="params.pid" :cid.sync="params.cid" :aid.sync="params.aid"></cascade>
            </span>
            <!--文本输入-->
            <span v-if="one.type == 'text'" ><label for="">{{one.labelcaption}}</label>
              <input type="text" name="name" :value="params[one.keyname]" v-model="params[one.keyname]">
            </span>
            <!--日选择-->
            <span v-if="one.type == 'datepicker'" ><label for="">{{one.labelcaption}}</label>
               <datepicker  :value.sync="params[one.keyname]" :formate="one.formate" ></datepicker>
             </span>


            <!--范围选择-->
            <span v-if="one.type == 'daterange'" ><label for="">{{one.labelcaption}}</label>
                <daterange :start.sync="params[one.keynamestart]" :end.sync="params[one.keynameend]" :formate="one.formate"></daterange>
            </span>
            <!--月选择-->
            <span v-if="one.type == 'datemonth'" ><label for="">{{one.labelcaption}}</label>
                <datemonth classname="startMonth" :value.sync="params[one.keyname]" ></datemonth>
            </span>

            <!--下拉选择-->
            <span v-if="one.type == 'combobox'" ><label for="">{{one.labelcaption}}</label>
                <combobox :labelname="one.labelname" :keyid="one.rid"  :datas="one.datas" :value.sync="params[one.keyname]"></combobox>
            </span>
        </span>
        <span :class='sCss.searchbtn'><btn @click="searchHandler" iconname="icon-search" btnname="btn-primary">查询</btn></span>
    </div>
</template>

<script>
import sCss from "./search.css";
import combobox from "component/combobox/combobox";
import datemonth from "component/datemonth/dateMonth";
import datepicker from "component/datepicker/datePicker";
import daterange from "component/datepicker/dateRange";
import cascade from "component/combobox/combocascade";
import {triggerChange} from "actions/index";
import btn from "component/sprite/button.vue";
export default {
  props:{
    /**
        [

          {type:"datepicker", keyname:"xxDate", value:"", startdate:"", stopdate:"", formate:"yyyy-mm-dd", labelcaption:""},   // 日输入框
          {type:"daterange", keynamestart:"start", keynameend:"start", start:"", end:"", formate:"yyyy-mm-dd", labelcaption:""}, // 日范围输入框
          {type:"datemonth", keyname:"monthDate", value:"", startdate:"", stopdate:"", formate:"yyyy-mm-dd", labelcaption:""}, // 月输入框
          {type:"combobox", keyname:"name", , labelname:"", keyid:"", value:"", datas:[], labelcaption:""}, // 下拉框输入框
          {type:"cascade",pid:"0", cid:"0", aid:"0", labelcaption:""}, // 级联地址
          {type:"text", keyname:"detail", value:"", labelcaption:""}
      ]
    **/
    datas:{
      type:Array,
      default:() => [
        {type:"cascade", pid:1, cid:1, aid:1, labelcaption:"地址"},
        {type:"daterange", keynamestart:"start", keynameend:"end", start:"", end:"", formate:"yyyy-mm-dd", labelcaption:"范围选择"}, // 级联地址
        {type:"text", limit:"", num:"", value:"",  keyname:"detail", labelcaption:"详细地址"},
        {type:"datepicker", keyname:"datename", value:"", startdate:"", stopdate:"", formate:"yyyy-mm-dd", labelcaption:"日期"},
        {type:"datemonth", keyname:"monthDate", value:"", startdate:"", stopdate:"", formate:"yyyy-mm-dd", labelcaption:"月选择"},
        {type:"combobox", keyname:"name", labelname:"name", keyid:"id", value:"", datas:[{name:"test",id:1},{name:"test1",id:2}], labelcaption:"下拉"}]
    },
    pathname:{
        type: String
    },

    events:{
        type:Object,
        default: function() {return {onSearch: function(){}}}
    }
  },
  data: function () {
    return {
      sCss,
      params:{}
    }
  },
  computed: {

  },
  ready: function () {
  },
  created(){


    let pp = {};
    for(var i=0; i < this.datas.length; i++) {
        let one = this.datas[i];
        if(one.type == "datepicker" || one.type == "datemonth" || one.type == "combobox" || one.type == "text") {
            this.$set("params."+one.keyname, one.value);
        }
        else if(one.type == "daterange") {
           this.$set("params."+one.keynamestart, one.start);
           this.$set("params."+one.keynameend, one.end);
        }
        else if(one.type == "cascade") {
          this.$set("params.pid", one.pid);
          this.$set("params.cid", one.cid);
          this.$set("params.aid", one.aid);
        }
    }

    this.searchHandler();
  },
  attached: function () {},
  methods: {
      searchHandler: function(e){
        this.events.onSearch.call(this._context, this.params);
        if(e) this.$router.go({ path: this.pathname, query: this.params});
      }
  },

  components: {combobox,datemonth,datepicker,daterange,cascade, btn},
  watch:{
    "p": {
      handler: function(v,o){
          console.log(v);
      },
      deep: true
    }
  }
}
</script>
