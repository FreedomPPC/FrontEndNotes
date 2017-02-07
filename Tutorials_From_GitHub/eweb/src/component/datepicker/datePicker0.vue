<template>
    <div :class="datepCss.pickerBox">
        <input type="text"  :class="[classname,datepCss.datePickerInput]"  :value="value | dateformate formate">
        <span @click="changePickerMain" :class="datepCss.showBtn">点我</span>
        <div :class="datepCss.coverPicker"  v-show="showDatePicker" @click="changePickerMain" ></div>
        <div :class="datepCss.pickerMain" v-show="showDatePicker">
                <div :class="datepCss.datePickerTitleRow">
                      <span :class='datepCss.pickerIn'>
                        <span  @click='changeAttachOperator'>{{tplDate | dateformate formate}}</span>
                        <div :class="datepCss.attachoper" v-show='showYmBoxer'>
                            <div :class="datepCss.attachIn">
                                  <div :class="datepCss.attachMonth">

                                        <span v-for="mo in monthsArayy" @click="attachClickHandler" :month="mo.value" :class="mo.active? mo.active : ''">
                                              {{ mo.name }}
                                        </span>
                                  </div>

                                  <div :class="datepCss.attachYear">
                                        <span v-for="year in yearArayy" :year="year.value"  @click="attachClickHandler"  :class="year.active? year.active : ''">
                                              {{ year.value }}
                                        </span>
                                  </div>
                            </div>
                            <div :class="datepCss.attachFooter">
                                 <button type="button" name="button" @click="todayHandler">今天</button>

                                 <span :class='datepCss.btnBoxer'>
                                        <button type="button" name="button"  @click="confirmHandler">确定</button>
                                        <button type="button" name="button"  @click="cancelHandler">取消</button>
                                 </span>
                            </div>
                        </div>
                      </span>
                      <div :class='datepCss.operMonth' @click='operMonthHandler'>
                            <span  :class='datepCss.monthprev'>前一个月</span>
                            <span  :class='datepCss.monthnext'>后一个月</span>
                      </div>
                      <div :class='datepCss.operYear' @click='operYearHandler'>
                            <span  :class='datepCss.yearprev'>前一年</span>
                            <span  :class='datepCss.yearnext'>后一年</span>
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
import datepCss from "./datePicker.css"
export default {
  props:{
      classname:{
        type: String
      },
      value:{
        type: Date
      },
      formate:{
        type: String
      },
      stopdate:{
        type: Date,
        default: () => new Date()
      },
      startdate:{
        type: Date,
        default: () => new Date(2010,0,0)
      }
  },
  data: function () {
    return {
      datepCss,
      showDatePicker: false,    //是否日历视图控制
      showYmBoxer:false,        // 年月视图控制
      dayCaption:["周日","周一","周二","周三","周四","周五","周六"],
      tplDate: this.value,      // 日历视图的临时存储值， 在点击m单个天的时候 与 value 同步
      month: 1,                 // 全局 初始月
      year: 1970                // 全局初始年
    }
  },
  computed: {
      mainDateArry(){
          let year = this.year = this.tplDate.getFullYear();          let month = this.month = this.tplDate.getMonth(); let curDay = this.curDay =  this.tplDate.getDate();

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
            else if(i == curDay) dateArry.push({ day: i,year: year, month: month+1,tag:this.datepCss.curDay, active: this.datepCss.active});
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
      },
      yearArayy(){
        this.startYear = 2010;
        // 区间12
        let ayy = [];
        for (var i = 0; i < 12; i++) {
          if(this.startYear+i == this.year) ayy.push({value:this.startYear+i, active:this.datepCss.oneActive})
          else ayy.push({value:this.startYear+i})
        }
        return ayy;
      },

      monthsArayy() {
        let monthArry = [{name:"一月", value:0}, {name:"二月", value:1},{name:"三月", value:2},{name:"四月", value:3},{name:"五月", value:4},{name:"六月", value:5},
                         {name:"七月", value:6},{name:"八月", value:7},{name:"九月", value:8},{name:"十月", value:9},{name:"十一月", value:10},{name:"十二月", value:11}];

        for (var i = 0; i < monthArry.length; i++) {
            var  one = monthArry[i];
            if(one.value == this.month) one.active = this.datepCss.oneActive
        }
        return monthArry;
      }
  },
  ready: function () {},
  attached: function () {},
  methods: {
    // 改变主日历视图的显示隐藏
    changePickerMain() {
        this.tplDate = this.value;
        this.showYmBoxer = false;
        this.showDatePicker = !this.showDatePicker;
    },

    // 今天
    todayHandler() {
        this.value = this.tplDate = new Date();
        this.changeAttachOperator();
    },

    attachClickHandler(e) {
      let target = $(e.target);
      target.siblings().removeClass(this.datepCss.oneActive);
      target.addClass(this.datepCss.oneActive);
    },
    // 确定
    confirmHandler(){
      let target = $(this.$el);
      let monObj = target.find("."+ this.datepCss.attachMonth + " ." + this.datepCss.oneActive);
      let yearObj = target.find("."+ this.datepCss.attachYear + " ." + this.datepCss.oneActive);
      let month = monObj.length == 0? this.month : monObj.attr("month");
      let year = yearObj.length == 0? this.year : yearObj.attr("year");
      this.tplDate = new Date(year, month, this.curDay);
      this.changeAttachOperator();
    },

    // 取消
    cancelHandler(){
        this.changeAttachOperator();
    },
    dayClick(e) {
        var target = $(e.target);
        if(!target.parent().is("."+this.datepCss.curDay)) return false;
        if(target.parent().is("."+this.datepCss.closeDay)) return false;

        var scope =$(this.$el);
        scope.find("span").removeClass(this.datepCss.active);
        target.addClass(this.datepCss.active);
        var dateNow = new Date(target.attr("year"),target.attr("month")*1-1, target.attr("day"));
        this.$dispatch("dayClick", {times: dateNow.getTime(), who: this.classname}); // 发射事件
        this.value = dateNow;
        this.changePickerMain();
    },

    operMonthHandler(e) {
        var target = $(e.target);
        if(target.is("."+this.datepCss.monthprev)) {
          var tpDate = new Date(this.year, this.month, 0);
          var tpDay = tpDate.getDate();
          if(tpDay < this.curDay) this.curDay = tpDay;
          // this.value = new Date(this.year, this.month-1, this.curDay);
          this.checkDateRange(new Date(this.year, this.month-1, this.curDay));
        }
        else if(target.is("."+this.datepCss.monthnext)) {
          var tpDate = new Date(this.year, this.month+2, 0);
          var tpDay = tpDate.getDate();
          if(tpDay < this.curDay) this.curDay = tpDay;
          this.checkDateRange(new Date(this.year, this.month+1, this.curDay));
        }
    },

    operYearHandler(e) {
        var target = $(e.target);
        if(target.is("."+this.datepCss.yearprev)) {
          var tpDate = new Date(this.year-1, this.month+1, 0);
          var tpDay = tpDate.getDate();
          if(tpDay < this.curDay) this.curDay = tpDay;
          this.checkDateRange(new Date(this.year-1, this.month, this.curDay));
        }
        else if(target.is("."+this.datepCss.yearnext)) {
          var tpDate = new Date(this.year+1, this.month+1, 0);
          var tpDay = tpDate.getDate();
          if(tpDay < this.curDay) this.curDay = tpDay;
          this.checkDateRange(new Date(this.year+1, this.month, this.curDay));
        }
    },

    changeAttachOperator(e) {
          this.showYmBoxer = !this.showYmBoxer;
    },

    // 校验 日期区间
    checkDateRange(tplDate) {
          this.tplDate = tplDate;
          // if(this.tplDate < this.stopdate) this.value = tplDate
    }
  },
  components: {}
}
</script>
