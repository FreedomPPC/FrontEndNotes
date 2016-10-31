<template>
    <div :class="datepCss.pickerBox">
        <input type="text"  :class="[classname,datepCss.datePickerInput]"  :value="value" readonly="true">
        <span @click="changePickerMain" :class="datepCss.showBtn"><icon iconname="icon-date"></icon></span>
        <div :class="datepCss.coverPicker"  v-show="showDatePicker" @click="changePickerMain" ></div>
        <div :class="datepCss.pickerMain" v-show="showDatePicker">
                <div :class="datepCss.datePickerTitleRow">
                      <span :class='datepCss.pickerIn'>
                        <span  @click='changeAttachOperator'>{{tplDate | dateformate formate}}</span>
                        <datemonth v-show="showYmBoxer" :datedepend="true" :show-date-month.sync="showYmBoxer" :value.sync="monthData" :stopdate="stopdate"  :startdate="startdate"></datemonth>
                      </span>
                      <div :class='datepCss.operMonth' >
                            <span  :class='datepCss.monthprev' @click='operMonthHandler("prev")'><icon :class='datepCss.iconm' iconname="icon-left2"></icon></span>
                            <span  :class='datepCss.monthnext' @click='operMonthHandler("next")'><icon :class='datepCss.iconm' iconname="icon-right2"></icon></span>
                      </div>
                      <div :class='datepCss.operYear'>
                            <span  :class='datepCss.yearprev'  @click='operYearHandler("prev")'><icon iconname="icon-left1"></icon></span>
                            <span  :class='datepCss.yearnext'  @click='operYearHandler("next")'><icon iconname="icon-right1"></icon></span>
                      </div>
                </div>
                <table>
                    <thead>
                      <tr>
                        <th v-for="daycp in dayCaption">
                         {{ daycp }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="md in mainDateArry">
                            <td  v-for="subone in md" :class='subone.tag' >
                                  <span :class="subone.active? subone.active : ''" :year='subone.year' :month='subone.month' :day='subone.day'  @click="dayClick">{{subone.day}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </div>
</template>

<script>
import datepCss from "./datePicker.css";
import datemonth from "component/datemonth/dateMonth";
import Utils from "common/Utils";
import icon from "component/sprite/icon.vue";
export default {
  props:{
      classname:{               // 定义控件的样式名称
        type: String
      },
      value:{                   // 定义默认日期 同时也是 数据交互的入口.sync
        // type: Date
      },
      formate:{                // 定义日期格式化
        type: String,
        default:"yyyy/mm/dd"
      },
      events:{
        type:Object,
        default: function(){
          return {
            dayClick: function(d) {

            }
          }
        }
      },
      stopdate:{              // 定义截止日期限制
        // type: Date,
        default: () => new Date()
      },
      startdate:{              // 定义开始日期限制
        // type: Date,
        default: () => new Date(2010,0,0)
      }
  },
  components: {
    datemonth,icon
  },
  data: function () {
    return {
      datepCss,
      showDatePicker: false,    //是否日历视图控制
      showYmBoxer:false,        // 年月视图控制
      dayCaption:["周日","周一","周二","周三","周四","周五","周六"],
      tplDate: this.value? new Date(this.value) : new Date(),      // 日历视图的临时存储值， 在点击m单个天的时候 与 value 同步
      monthData: this.value?this.value : Utils.formate(new Date(), this.formate),
      month: 1,                 // 全局 初始月
      year: 1970                // 全局初始年
    }
  },
  computed: {
      mainDateArry(){
          let year = this.year = this.tplDate.getFullYear();          let month = this.month = this.tplDate.getMonth();
          let curDay = this.curDay = new Date(this.value).getDate();

          // 此两处都是零点  起始日期
          let startDateObj = new Date(year, month, 1);  let endDateObj = new Date(year, month+1, 0);
          // 周的 序列
          let startDay = startDateObj.getDay();         let endDay = endDateObj.getDay();
          // 日
          let startDate = startDateObj.getDate();       let endDate = endDateObj.getDate();

          let dateArry = [];
          let stopTimes = this.stopdate.getTime();
          let beiginTimes = this.startdate.getTime();
          for(var i=startDate; i <= endDate; i++) {
            var times = new Date(year, month, i).getTime();
            if(times > stopTimes || times < beiginTimes) dateArry.push({ day: i,year: year, month: month+1,tag:this.datepCss.closeDay});
            else if(i == curDay) {
              if(year == new Date(this.value).getFullYear() && month == new Date(this.value).getMonth())   dateArry.push({ day: i,year: year, month: month+1,tag:this.datepCss.curDay, active: this.datepCss.active});

            }
            else dateArry.push({ day: i,year: year, month: month+1,tag:this.datepCss.curDay});
          }  // 整月

          let startTimes = startDateObj.getTime();      let endTimes = endDateObj.getTime();
          let oneDay = 3600*24*1000;
          for(var i=0; i < startDay; i++) {       // 补前
              let rangeDay = oneDay + oneDay*i; let preDay = startTimes - rangeDay; let preDateObj = new Date(preDay);
              dateArry.unshift({day: preDateObj.getDate(),year: preDateObj.getFullYear(),month: preDateObj.getMonth()+1,tag:this.datepCss.prevDay});
          }

          for(var i=0; i < 6-endDay; i++) {     // 补后
              let rangeDay = oneDay + oneDay*i; let nextDay = endTimes + rangeDay; let nextDateObj = new Date(nextDay);
              dateArry.push({day: nextDateObj.getDate(),year: nextDateObj.getFullYear(),month: nextDateObj.getMonth()+1, tag:this.datepCss.nextDay});
          }

          let l = dateArry.length/7;          let datemap = [];
          // 格式化  以7位单位
          for(var i=0; i < l; i++) {
              datemap.push(dateArry.slice(i*7, (i+1)*7));
          }

          return datemap
      }
  },
  ready: function () {},
  attached: function () {},
  methods: {
    // 改变主日历视图的显示隐藏
    changePickerMain() {
        this.tplDate = this.value? new Date(this.value) : new Date();
        this.showYmBoxer = false;
        this.showDatePicker = !this.showDatePicker;
    },

    dayClick(e) {
        var target = $(e.target);
        if(!target.parent().is("."+this.datepCss.curDay)) return false;
        if(target.parent().is("."+this.datepCss.closeDay)) return false;

        var scope =$(this.$el);
        scope.find("span").removeClass(this.datepCss.active);
        target.addClass(this.datepCss.active);
        var dateNow = new Date(target.attr("year"),target.attr("month")*1-1, target.attr("day"));
        this.value = Utils.formate(dateNow, this.formate);
        this.events.dayClick.call(this._context, this.value);
        this.$dispatch("dayclick", this.value); // 发射事件
        this.changePickerMain();
    },

    operMonthHandler(type) {
        let tpd = new Date(this.year, this.month, 0);
        let tpDay = tpd.getDate();
        if(!this.curDay) this.curDay = this.tplDate.getDate();
        if(this.curDay > tpDay)  this.curDay = tpDay;
        if(type == "prev") this.tplDate = new Date(this.year, this.month-1, this.curDay);
        else if(type == "next") this.tplDate =  new Date(this.year, this.month+1, this.curDay);
    },

    operYearHandler(type) {
        let tpd = new Date(this.year, this.month, 0);
        let tpDay = tpd.getDate();
        if(!this.curDay) this.curDay = this.tplDate.getDate();
        if(this.curDay > tpDay)  this.curDay = tpDay;
        if(type == "prev") this.tplDate = new Date(this.year-1, this.month, this.curDay);
        else if(type == "next") this.tplDate = new Date(this.year+1, this.month, this.curDay);
    },

    changeAttachOperator(e) {
          this.showYmBoxer = !this.showYmBoxer;
    },

    // 校验 日期区间
    checkDateRange(tplDate) {
          this.tplDate = tplDate;
          // this.monthData = Utils.formate(tplDate, this.formate);
    }
  },

  watch:{
    "monthData": function(){
        this.tplDate = new Date(this.monthData);
    }
  }
}
</script>
