<template>
  <div>
    <button @click='increment'>Increment +1</button>
    <button @click='reduce'>Increment -1</button>

  </div>
</template>

<script>
import { incrementCounter,reduceCounter } from '../store/actions'
export default {
  vuex: {
    actions: {
      increment: incrementCounter,
      reduce:reduceCounter
    }
  }
}
</script>
