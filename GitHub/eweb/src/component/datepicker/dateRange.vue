<template>

    <datepicker :class="rangeCss.startTime" :value.sync="start" :formate="formate" :stopdate.sync="startstopdate" :startdate="startstartdate" ></datepicker>
    -
    <datepicker :class="rangeCss.endTime" :value.sync="end" :formate="formate" :stopdate="endstopdate" :startdate.sync="endstartdate" ></datepicker>
</template>

<script>
import datepicker from "./datePicker";
import rangeCss from "./range.css"
export default {
  props:{
    start:{
      default:""
    },
    value:{  // 表单需要

    },
    end:{
      default:""
    },

    formate:{
      type: String,
      default:"yyyy/mm/dd"
    },

    startstopdate: {
      type: Date,
      default: () => new Date(2100,1,1)
    },

    endstopdate: {
      type: Date,
      default: () => new Date(2100,1,1)
    },

    startstartdate: {
      type: Date,
      default: () => new Date(2010,1,1)
    },

    endstartdate: {
      type: Date,
      default: () => new Date(2010,1,1)
    }
  },
  data: function () {
    return {
      rangeCss
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {datepicker},
  watch:{
    "start": function(v){
        this.endstartdate = new Date(this.start);
        this.$dispatch("rangechange", {name:"start", value:v});
    },
    "end": function(v) {
        this.startstopdate = new Date(this.end);
        this.$dispatch("rangechange", {name:"end", value:v});
    }
  }
}
</script>
