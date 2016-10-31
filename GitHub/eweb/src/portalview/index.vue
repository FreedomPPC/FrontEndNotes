<template>
  <div id="app_view">
        <div class="app_header">
            <headerbox></headerbox>
        </div>
        <div class="app_container">
              <div class="app_left_menus_box">
                    <menus></menus>
              </div>
              <div class="app_main_container">
                    <div class="app_container_in">
                        <div class="subTitle">
                            {{title}}
                        </div>
                        <router-view ></router-view>
                        <div class="clear"></div>
                    </div>
              </div>
        </div>
  </div>
</template>

<script>
import headerbox from 'portal/header';
import menus from 'portal/menus';
import foot from 'portal/footer';
import {getTitle} from 'stores/getters'
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {
    this.$nextTick(function () {
      //  this.$el.querySelector(".app_main_container").style.width = (1-200/window.innerWidth)*100 + "%";
    })
  },
  attached: function () {},
  methods: {},
  components: {headerbox,menus,foot},
  vuex: {
      getters: {
         title: getTitle
       }
   }
}
</script>
