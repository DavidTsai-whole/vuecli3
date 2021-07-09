<template>
<Navbar :data="classList"></Navbar>
<router-view></router-view>
<Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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
    Navbar,
    Footer
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
