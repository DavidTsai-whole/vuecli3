<template>
<ToastMessages></ToastMessages>
  <router-view/>
</template>

<script>
import emitter from '@/methods/mitt'
import pushMessageStatus from '@/methods/pushMessageState'
import ToastMessages from '@/components/ToastMessages'
export default {
  provide () {
    return {
      emitter,
      pushMessageStatus
    }
  },
  components: {
    ToastMessages
  }
}
</script>

<style lang="scss">
@import '@/assets/all'
</style>
