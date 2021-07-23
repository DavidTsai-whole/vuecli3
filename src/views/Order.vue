<template>
  <Loading :active="isLoading"></Loading>
  <div class="finalOrder">
    <div class="banner bg-cover" v-if="paySuccess === false"></div>
    <div class="bannerSuccess bg-cover" v-else>
    <section class="d-flex flex-column align-items-center py-5">
      <h1 class="fw-bold text-white fs-7">訂單完成</h1>
      <p class="fw-bold text-white fs-2">謝謝您的訂購 !</p>
      <p class="fw-bold text-white fs-2">訂單預計在1 ~ 2個小時內送達。</p>
    </section>
    </div>
    <div class="container my-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7">
          <div class="information text-center">
            <h2 class="fw-bold">訂單資訊</h2>
            <hr class="bg-dark" style="opacity: 1" />
            <ul class="list-unstyled">
              <li class="d-flex justify-content-between mb-1">
                <span class="fs-5 fw-bold">顧客姓名</span>
                <span class="fs-5 fw-bold">{{ order.user.name }}</span>
              </li>
              <li class="d-flex justify-content-between mb-1">
                <span class="fs-5 fw-bold">電子信箱</span>
                <span class="fs-5 fw-bold">{{ order.user.email }}</span>
              </li>
              <li class="d-flex justify-content-between mb-1">
                <span class="fs-5 fw-bold">聯絡方式</span>
                <span class="fs-5 fw-bold">{{ order.user.tel }}</span>
              </li>
              <li class="d-flex justify-content-between">
                <span class="fs-5 fw-bold">送達地址</span>
                <span class="fs-5 fw-bold">{{ order.user.address }}</span>
              </li>
            </ul>
            <hr />
            <ul class="list-unstyled">
              <li class="d-flex justify-content-between mb-1">
                <span class="fs-5 fw-bold">付款金額</span>
                <span class="fs-5 fw-bold">${{ order.total }}</span>
              </li>
              <li class="d-flex justify-content-between">
                <span class="fs-5 fw-bold">付款狀態</span>
                <span class="fs-5 fw-bold text-danger" v-if="paySuccess === false"
                  >尚未付款</span
                >
                <span class="fs-5 fw-bold text-success" v-else>付款完成</span>
              </li>
            </ul>
            <hr />
            <div class="btn d-flex justify-content-between" v-if="paySuccess === false">
              <a
                href="#/"
                class="btn-custom2 hvr-shutter-out-horizontal"
                ><i class="bi bi-reply-fill"></i>回首頁</a
              >
              <a href="#" class="btn-custom hvr-bounce-to-right" @click.prevent="pay"
                >確認付款</a
              >
            </div>
            <div class="btn text-center" v-else>
              <a
                href="#/"
                class="btn-custom2 hvr-shutter-out-horizontal"
                ><i class="bi bi-reply-fill"></i>回首頁</a
              >
            </div>
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
      order: [],
      isLoading: false,
      paySuccess: false
    }
  },
  methods: {
    getOrder (id) {
      id = this.$route.params.id
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order/${id}`
      this.$http.get(api).then((res) => {
        this.isLoading = false
        this.order = res.data.order
      })
    },
    pay () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(api).then((res) => {
        this.$sweetalert2(res)
        this.paySuccess = true
        this.isLoading = false
      })
    }
  },

  created () {
    this.getOrder()
  }
}
</script>
