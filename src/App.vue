<template>
  <router-view/>
</template>

<script>
import emitter from '@/methods/mitt'
export default {
  provide () {
    return {
      emitter
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/reset'
</style>
