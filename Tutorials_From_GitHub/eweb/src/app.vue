<template>
    <div>
      <router-view keep-alive></router-view>
    </div>
</template>
<script>

import baseCss from "base.css";
import store from 'stores/store';
export default {
    store,
    data(){
      return {

      }
    },

    components: {

    },

    ready(){

    }
}
</script>
