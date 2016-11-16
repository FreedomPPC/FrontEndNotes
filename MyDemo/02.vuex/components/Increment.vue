<template>
  <div>
    <button @click='increment'>Increment +1</button>
    <button @click='reduce'>Increment -1</button>
    <button @click='doubleTwo'>Double</button>

  </div>
</template>

<script>
import { incrementCounter,reduceCounter,doubleCounter } from '../store/actions'
export default {
  vuex: {
    actions: {
      increment: incrementCounter,
      reduce:reduceCounter,
      doubleTwo:doubleCounter
    }
  },


}
</script>
