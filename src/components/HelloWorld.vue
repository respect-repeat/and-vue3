<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ state.count }}</div>
    <button @click="add1">dianji</button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { reactive, computed, createApp } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    const state = reactive({
      count: 0
    })
    function add() {
      state.count++
    }
    return {
      state,
      add
    }
  },
  methods: {
    add1() {
      this.state.count++
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
