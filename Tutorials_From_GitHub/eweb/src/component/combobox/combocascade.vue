<template>
    <div :class="cascadeCss.cascadeBox">
                  <combobox labelname="name" keyid="id"   :datas="parry" :value.sync="pid"></combobox>
                  <combobox labelname="name" keyid="id"   :datas="carry" :value.sync="cid" ></combobox>
                  <combobox labelname="name" keyid="id"   :datas="aarry" :value.sync="aid"></combobox>
    </div>
</template>

<script>
import datas from "./city.json";
import cascadeCss from "./cascadeCss.css";
import combobox from "./combobox";
// console.log(datas);
export default {
  props:{
      pid:{
        default: 0
      },

      cid:{
        default: 0
      },

      aid: {
        default: 0
      }
  },
  data: function () {
    return {
        cascadeCss,
        datas:datas
    }
  },
  computed: {
      parry: function(){
          return this.datas;
      },

      carry: function(){
          let cdatas = [];
          for(var i=0; i < this.datas.length; i++) {
              if(this.datas[i].id == this.pid) cdatas = this.datas[i].citys;
          }
          return cdatas;
      },

      aarry: function(){
          let adatas = [];
          for(var i=0; i < this.carry.length; i++) {
              if(this.carry[i].id == this.cid) adatas = this.carry[i].areas;
          }
          if(!adatas || adatas.length == 0) this.$set("aid", 0);
          return adatas
      }
  },
  created(){
  },
  ready: function () {},
  attached: function () {},
  methods: {

  },
  components: {combobox},
  watch:{
    "pid": function(){
      this.$set("cid", 0);this.$set("aid", 0);
    },
    "cid": function(){
      this.$set("aid", 0);
    }
  }
}
</script>
