<template>
    <nav class="nav fixed-top" :class="data.bg">
    <div class="container d-flex align-items-center justify-content-between">
    <a href="#" class="h1 fw-bold  font-family-indie-flower" :class="data.text">CHILLBURGER</a>
    <div class="menu-toggle"></div>
    <ul class="menu d-flex list-unstyled fw-bold fs-5  mb-0">
      <li><a href="">商品列表</a></li>
      <li><a href="">關於我們</a></li>
      <li><a href=""><i class="bi bi-cart"></i></a></li>
    </ul>
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
  props: ['data']

}
</script>
