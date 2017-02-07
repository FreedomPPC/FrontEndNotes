<template>
    <sptable></sptable>
</template>

<script>
import sptable from "component/grid/tableSpec";
import {setTitle} from "actions/index.js";
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {sptable},
  route:{
    data: function(){
      setTitle(this.$store, "手风琴表格");
    }
  },
}
</script>
