<template>
    <div :class="dCss.demoBox">
      <router-view></router-view>
    </div>
</template>

<script>
import dCss from "./demo.css";
export default {
  data: function () {
    return {
      dCss
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>
