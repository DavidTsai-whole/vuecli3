<template>
<Navbar :data="classList"></Navbar>
<router-view></router-view>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  data () {
    return {
      classList: {
        bg: '',
        text: ''
      }
    }
  },
  components: {
    Navbar
  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (scrollY > 0) {
        this.classList.bg = 'bg-orange'
        this.classList.text = 'text-primary'
      } else {
        this.classList.bg = ''
        this.classList.text = ''
      }
    })
  }
}
</script>

<style lang="scss">
  @import '@/assets/all'
</style>
