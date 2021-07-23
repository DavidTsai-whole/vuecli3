<template>
  <nav class="nav fixed-top" :class="classList.bg">
    <div
      class="container-fluid d-flex align-items-center justify-content-between"
    >
      <a
        href="#/"
        class="h1 fw-bold font-family-indie-flower"
        :class="classList.text"
        >CHILLBURGER</a
      >
      <ul class="menu d-flex list-unstyled fw-bold fs-5 mb-0" ref="menu">
        <li>
          <a href="#/products"><i class="bi bi-grid-fill"></i> 商品列表</a>
        </li>
        <li>
          <a href="#/about"><i class="bi bi-chat-dots"></i> 關於我們</a>
        </li>
        <li>
          <a href="#/question"
            ><i class="bi bi-question-circle"></i> 常見問題</a
          >
        </li>
        <li class="d-lg-none">
          <a href="#/cart"
            ><i class="bi bi-cart"></i> 購物車<span>
              ({{ cartData.length }})</span
            ></a
          >
        </li>
        <li class="d-lg-none">
          <a href="#/favorite"
            ><i class="bi bi-heart-fill"></i> 商品清單<span>
              ({{ favoriteData.length }})</span
            ></a
          >
        </li>
      </ul>
      <ul class="menu-icon d-lg-flex list-unstyled fs-5 mb-0 d-none">
        <li>
          <router-link to="/cart"><i class="bi bi-cart"></i></router-link
          ><span class="cartNum" v-if="cartData.length !== 0">{{
            cartData.length
          }}</span>
        </li>
        <li>
          <router-link to="/favorite"
            ><i class="bi bi-heart-fill ms-2"></i></router-link
          ><span class="favoriteNum">{{ favoriteData.length }}</span>
        </li>
      </ul>
      <span class="d-lg-none text-white ms-auto me-2 zindex-1">Menu</span>
      <div
        class="menu-toggle d-lg-none"
        ref="menuIcon"
        @click="toggleIcon"
      ></div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      classList: {},
      cartData: [],
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  props: ['data'],
  inject: ['emitter'],
  methods: {
    toggleIcon () {
      const menuIcon = this.$refs.menuIcon
      const menu = this.$refs.menu
      menuIcon.classList.toggle('active')
      menu.classList.toggle('active')
    },
    getCart () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api).then(res => {
        if (res.data.success) {
          this.cartData = res.data.data.carts
        }
      })
    }
  },
  watch: {
    $route (to, from) {
      if (to.path !== '/') {
        this.classList.bg = 'bg-orange'
        this.classList.text = 'text-primary'
      } else {
        this.classList.bg = ''
        this.classList.text = ''
      }
    }
  },
  mounted () {
    this.getCart()
    this.emitter.on('update-cart', () => {
      this.getCart()
    })
    this.emitter.on('update-favorite', () => {
      this.favoriteData = JSON.parse(localStorage.getItem('favorite')) || []
    })
    this.emitter.on('pushNavbar', res => {
      this.classList = res
    })
  }
}
</script>
