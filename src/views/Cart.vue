<template>
  <Loading :active="isLoading"></Loading>
  <div class="cart">
    <div class="banner bg-cover"></div>
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <h2 class="text-center fw-bold mb-5">購物車</h2>
          <table class="table fs-4 align-middle">
            <thead>
              <tr>
                <th>產品圖片</th>
                <th>產品名稱</th>
                <th>數量</th>
                <th>價格</th>
                <th>刪除</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartData" :key="item.id">
                <td>
                <img :src="item.product.imageUrl" alt="">
                </td>
                <td>{{item.product.title}}</td>
                <td>{{item.qty}}</td>
                <td>{{item.product.price}}</td>
                <td>
                <a href="#" class="text-danger">
                <i class="bi bi-x-square"></i>
                </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      cartData: []
    }
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.cartData = res.data.data.carts
        }
      })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
