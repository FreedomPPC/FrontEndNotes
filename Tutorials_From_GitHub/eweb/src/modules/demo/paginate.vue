<template>
<div class="">
    <pg :totals="totals"></pg>
</div>
</template>

<script>
import pg from "component/pagination/pagination";
import {setTitle} from "actions/index.js";
export default {
  data: function () {
    return {
      totals: 100
    }
  },
  route:{
    data: function(){
      setTitle(this.$store, "分页");
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {pg}
}
</script>
