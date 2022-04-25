<template>
  <MyHeader />
  <RouterView />
</template>

<script>
import MyHeader from './components/MyHeader.vue'

export default {
  components: {
    MyHeader
    }
}
</script>

<style lang ="scss">
@import "./scss/main";
</style>
