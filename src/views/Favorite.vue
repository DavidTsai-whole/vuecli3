<template>
  <Loading :active="isLoading"></Loading>
  <div class="favorite">
    <div class="banner bg-cover"></div>
    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 col-md-8">
          <h2 class="fw-bold mb-5 text-center">願望清單</h2>
          <div class="wish" v-if="favoriteData.length !==0">
          <div
            class="wishCard d-flex bg-orange mb-2"
            v-for="item in favoriteProduct"
            :key="item.id"
          >
            <img :src="item.imageUrl" alt="" />
            <div class="title d-flex flex-column justify-content-around ms-3">
              <h5 class="fw-bold">{{ item.title }}</h5>
              <span class="text-danger fw-bold">NT ${{ item.price }}</span>
            </div>
            <div class="icon d-flex flex-column ms-auto justify-content-around me-2">
              <div class="close text-end" @click="deleteItem(item.id)">
                <i class="bi bi-x-lg"></i>
              </div>
              <button
                type="button"
                class="btn btn-primary text-white"
                @click="addCart(item)"
              >
                加入購物車
              </button>
            </div>
          </div>
          </div>
          <div class="noWish text-center" v-else>
            <h4 class="fw-bold mb-5">哎呀！您的清單是空的，趕快去加入收藏吧！</h4>
            <img src="https://upload.cc/i1/2021/07/13/OGfKXe.jpg" alt="" />
            <a href="#/products" class="btn-custom2 hvr-shutter-out-horizontal my-2"
              ><i class="bi bi-reply-fill"></i>立刻追蹤</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || [],
      products: [],
      favoriteProduct: [],
      isLoading: false
    }
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api).then((res) => {
        this.products = res.data.products
        this.getFevorite()
      })
    },
    getFevorite () {
      this.favoriteProduct = this.products.filter((item) => {
        return this.favoriteData.indexOf(item.id) > -1
      })
    },
    deleteItem (id) {
      const followId = this.favoriteData.indexOf(id)
      this.favoriteData.splice(followId, 1)
      this.getFevorite()
      this.$sweetalert('已取消追蹤')
      localStorage.setItem('favorite', JSON.stringify(this.favoriteData))
    },
    addCart (item) {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      const data = {
        product_id: item.id,
        qty: 1
      }
      this.$http.post(api, { data: data }).then((res) => {
        this.$sweetalert2(res)
        this.isLoading = false
      })
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
