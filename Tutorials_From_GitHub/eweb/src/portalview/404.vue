<template lang="html">
  <div :class="css.fBox">
        <div :class="css.fBoxIn">
              <div :class="css.fBoxContainer">
                  <img :src="fof" alt="" />
                  <div :class="css.fBoxInfo">
                        <p :class='css.foftitle'>
                          404
                        </p>
                        <p>
                          抱歉，您访问的地址有误或者页面不存在。
                        </p>
                        <p>
                          <btn btnname="btn-primary" @clickaction="returnIndex">返回首页</btn>
                        </p>
                  </div>
              </div>
        </div>
  </div>
</template>

<script>
import css from "./fof.css";
import fof from "asset/img/fof.png";
import btn from "component/sprite/button";
export default {
  data: function () {
    return {
      css,
      fof: fof
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    returnIndex: function(){
       this.$router.go({path:"/"})
    }
  },
  components: {btn}
}
</script>
