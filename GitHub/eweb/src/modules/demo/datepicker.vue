<template>
      <panel>
          <div slot="panelTitle">
                日选择  日历
          </div>
          <div slot="panelContent">
            <datepicker classname="startTime" :value.sync="today" formate="yyyy-mm-dd" :stopdate="stopdate" :startdate="startdate" ></datepicker>
          </div>
          <div slot="panelFooter">
              <div class="">
                    选择结果：{{today}}
              </div>
          </div>
      </panel>

      <panel>
          <div slot="panelTitle">
                月选择  日历
          </div>
          <div slot="panelContent">
            <datemonth classname="startMonth" :value.sync="curDay"  :stopdate="stopdate" :startdate="startdate"></datemonth>
          </div>
          <div slot="panelFooter">
              <div class="">
                    <!-- 选择结果：{{curDay | dateformate 'yyyy-mm'}} -->
              </div>
          </div>
      </panel>

      <panel>
          <div slot="panelTitle">
                 日历范围
          </div>
          <div slot="panelContent">
            <daterange :start.sync="start" :end.sync="end"></daterange>
          </div>
          <div slot="panelFooter">
              <div class="">
                    <!-- 选择结果：{{start | dateformate 'yyyy-mm-dd'}} -- {{end| dateformate 'yyyy-mm-dd'}} -->
              </div>
          </div>
      </panel>


</template>

<script>
import datepicker from "component/datepicker/datePicker";
import daterange from "component/datepicker/dateRange";
import datemonth from "component/datemonth/dateMonth";
import {setTitle} from "actions/index.js";
import panel from "component/panel/panel";
export default {
  data: function () {
    return {
      today: "",
      start:"",
      end:"",
      curDay: "2016-08",
      stopdate: new Date(2020,1,1),
      startdate: new Date(2010,1,1)
    }
  },
  route:{
    data: function(){
      setTitle(this.$store, "日历");
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    datepicker, datemonth,panel,daterange
  },
  watch:{
    "today": function(){
      console.log(this);
      console.log(this.today);
    }
  }
}
</script>
