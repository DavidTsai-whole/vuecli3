<template>
  <router-view/>
</template>

<script>
import emitter from '@/methods/mitt'
import pushMessageStatus from '@/methods/pushMessageState'
export default {
  provide () {
    return {
      emitter,
      pushMessageStatus
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/all'
</style>
