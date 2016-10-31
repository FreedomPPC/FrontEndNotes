<template>
  <div :class="datepCss.dateMonthBox">
    <input  v-show="!datedepend" type="text"  :class="[classname,datepCss.dateMonthInput]"  :value="value">
    <span   v-show="!datedepend" @click="changePickerMain" :class="datepCss.showBtn"><icon iconname="icon-date"></icon></span>
    <div :class="datepCss.attachoper" v-show="showDateMonth">
        <div :class="datepCss.coverPicker"   @click="changePickerMain" ></div>
        <div :class="datepCss.attachIn">
              <div :class="datepCss.attachMonth">
                <span v-for="mo in monthsArayy" @click="attachClickHandler" :month="mo.value" :class="[datepCss.oneItem, mo.active? mo.active : '']">
                      {{ mo.name }}
                </span>
              </div>

              <div :class="datepCss.attachYear">
                <span v-for="ye in yearsArayy" @click="attachClickHandler" :year="ye.value" :class="[datepCss.oneIt em, ye.active? ye.active : '']">
                      {{ ye.value }}
                </span>
                <span :class='datepCss.yearOper'>
                      <icon iconname="icon-left1" @click="prevAction" :class="datepCss.yop"></icon>
                      <icon iconname="icon-right1"  @click="nextAction" :class="datepCss.yop"></icon>
                </span>
              </div>
        </div>
        <div :class="datepCss.attachFooter">
             <btn @click="curMonthAction" btnname="btn-default">当月</btn>
             <span :class='datepCss.btnBoxer'>
                    <btn @click="confirmAction" btnname="btn-default">确定</btn>
                    <btn @click="cancelAction" btnname="btn-default">取消</btn>
             </span>
        </div>
    </div>
  </div>
</template>

<script>
import datepCss from "./dateMonth.css";
import Utils from "common/Utils";
import icon from "component/sprite/icon.vue";
import btn from "component/sprite/button.vue";
export default {
  props:{
      datedepend:{                // 是否是独立的还是依赖于datepicker的
          type: Boolean,
          default: false
      },
      showDateMonth:{           // 控制选择视图的显示和隐藏
        type: Boolean,
        default: false
      },
      classname:{               // 样式名称
        type: String
      },
      value:{                   // 关键值
        // type: Date,
        // default: () => new Date()
      },
      formate:{                 // 格式化
        type:String,
        default: () => 'yyyy-mm'
      },
      startdate:{                // 开始时间限制
          // type:Date,
          default:() => new Date(1970,1,1)
      },
      stopdate:{                // 结束时间限制
          // type:Date,
          default: () => new Date(2100,1,1)
      }
  },
  data: function () {
    return {
      datepCss,
      // showDateMonth: false,
      dayCaption:["周日","周一","周二","周三","周四","周五","周六"],
      tplDate: this.value? new Date(this.value) : new Date(), //this.value || new Date(),
      year: this.value? this.value.substring(0,4):new Date().getFullYear()
    }
  },
  computed: {
    monthsArayy() {
      let month =  this.tplDate.getMonth();
      let monthArry = [{name:"一月", value:0}, {name:"二月", value:1},{name:"三月", value:2},{name:"四月", value:3},{name:"五月", value:4},{name:"六月", value:5},
                       {name:"七月", value:6},{name:"八月", value:7},{name:"九月", value:8},{name:"十月", value:9},{name:"十一月", value:10},{name:"十二月", value:11}];
      let Year = this.tplDate.getFullYear();
      // let Month = this.tplDate.getMonth();
      for (var i = 0; i < monthArry.length; i++) {
          var  one = monthArry[i];
          if(Year < this.startdate.getFullYear() || Year > this.stopdate.getFullYear()) one.active = this.datepCss.closeDay
          else if(Year == this.startdate.getFullYear() && one.value < this.startdate.getMonth()) one.active = this.datepCss.closeDay
          else if(Year == this.stopdate.getFullYear() && one.value > this.stopdate.getMonth()) one.active = this.datepCss.closeDay
          else if(one.value == month) one.active = this.datepCss.oneActive

      }

      return monthArry;
    },

    yearsArayy() {
      let year = this.tplDate.getFullYear() + "";
      // 构造year 数组 以0 - 9
      let preStr = year.slice(0,3);
      let lastKey = year.slice(3)*1;
      let yearArry = [];
      for(var i =0; i < lastKey; i++) {
        let cy = (preStr +  i)*1;
        if(cy < this.startdate.getFullYear() || cy > this.stopdate.getFullYear()) yearArry.push({value: cy, active:this.datepCss.closeDay})
        else  yearArry.push({value: cy})
      }
      if(year == this.year) yearArry.push({value: year, active:this.datepCss.oneActive})
      else {
        if(year*1 < this.startdate.getFullYear() || year*1 > this.stopdate.getFullYear()) yearArry.push({value: year, active:this.datepCss.closeDay})
        else  yearArry.push({value: year})
      }
      for(var i =lastKey+1; i < 10; i++) {
        let cy = (preStr +  i)*1;
        if(cy < this.startdate.getFullYear() || cy > this.stopdate.getFullYear()) yearArry.push({value: cy, active:this.datepCss.closeDay})
        else  yearArry.push({value: cy})
      }
      return yearArry
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {
    changePickerMain() {
        this.tplDate = this.value? new Date(this.value) : new Date();//this.value;
        this.year  = this.tplDate.getFullYear();
        this.showDateMonth = !this.showDateMonth;
    },
    attachClickHandler(e) {
      let target = $(e.target);
      if(target.is("."+this.datepCss.closeDay)) return false;
      target.siblings().removeClass(this.datepCss.oneActive);
      target.addClass(this.datepCss.oneActive);
      let year = target.attr("year");
      if(year) {
        this.year = year;
        this.tplDate = new Date(year, this.tplDate.getMonth(), 1);
      }
    },

    curMonthAction(){
        let curDate = new Date();
        this.value = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
        this.changePickerMain();
    },

    confirmAction(){
      let target = $(this.$el);
      let monObj = target.find("."+ this.datepCss.attachMonth + " ." + this.datepCss.oneActive);
      let yearObj = target.find("."+ this.datepCss.attachYear + " ." + this.datepCss.oneActive);
      if(monObj.length == 0 || yearObj.length == 0) {
          this.changePickerMain();
          return false;
      }
      let month = monObj.attr("month");
      let year = yearObj.attr("year");
      this.value = Utils.formate(new Date(year, month, 1), this.formate);
      this.$dispatch("monthclick", this.value);
      this.changePickerMain();
    },

    cancelAction(){
      this.tplDate = this.value || new Date();
        this.showDateMonth = false;
    },

    prevAction(){
        let tpYear = this.tplDate.getFullYear();
        let tpMonth = this.tplDate.getMonth();
        let newYear = tpYear - 10;
        this.tplDate = new Date(newYear, tpMonth, 1);
    },
    nextAction(){
        let tpYear = this.tplDate.getFullYear();
        let tpMonth = this.tplDate.getMonth();
        let newYear = tpYear + 10;
        this.tplDate = new Date(newYear, tpMonth, 1);
    }
  },
  components: {icon, btn},
  watch:{
    "value": function(){
      this.tplDate = new Date(this.value);
    }
  }
}
</script>
