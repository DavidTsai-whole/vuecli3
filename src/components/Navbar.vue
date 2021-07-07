<template>
    <nav class="nav fixed-top" :class="data.bg">
    <div class="container-fluid d-flex align-items-center justify-content-between">
    <a href="#" class="h1 fw-bold font-family-indie-flower" :class="data.text">CHILLBURGER</a>
    <ul class="menu d-flex list-unstyled fw-bold fs-5 mb-0" ref="menu">
      <li><a href="">商品列表</a></li>
      <li><a href="">關於我們</a></li>
      <li><a href="">常見問題</a></li>
      <li class="d-lg-none"><a href=""><i class="bi bi-cart"></i> 購物車</a></li>
      <li class="d-lg-none"><a href=""><i class="bi bi-heart-fill"></i> 商品清單</a></li>
    </ul>
    <ul class="menu-icon d-lg-flex list-unstyled fs-4 mb-0 d-none">
       <li><a href=""><i class="bi bi-cart"></i></a></li>
       <li><a href=""><i class="bi bi-heart-fill ms-2"></i></a></li>
    </ul>
    <span class="d-lg-none text-white ms-auto me-2 zindex-1">Menu</span>
    <div class="menu-toggle d-lg-none" ref="menuIcon" @click="toggleIcon"></div>
    </div>

    </nav>

</template>

<script>
export default {
  data () {
    return {
      classList: {}
    }
  },
  props: ['data'],
  methods: {
    toggleIcon () {
      const menuIcon = this.$refs.menuIcon
      const menu = this.$refs.menu
      menuIcon.classList.toggle('active')
      menu.classList.toggle('active')
    }
  }
}
</script>
