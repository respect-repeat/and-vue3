<template>
  <div class="hello">
    <HelloWorld :msg="HelloWorld" />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld: HelloWorld
  },
  data() {
    return { HelloWorld: 'sdsa' }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
