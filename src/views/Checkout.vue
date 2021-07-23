<template>
  <Loading :active="isLoading"></Loading>
  <div class="checkout">
    <div class="banner bg-cover"></div>
    <div class="container mt-5">
      <div class="row mb-4">
        <div class="col-md-7 order-md-0 order-1 mt-md-0 mt-5">
          <h2 class="fw-bold">訂購人資訊</h2>
          <hr class="bg-dark" style="opacity: 1" />
          <Form v-slot="{ errors }">
            <div class="mb-2">
              <label for="email" class="form-label fw-bold"
                ><span class="text-danger">*</span> Email</label
              >
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control"
                v-model="form.user.email"
                :class="{ 'is-invalid': errors['email'] }"
                rules="email|required"
                placeholder="請輸入 Email"
              ></Field>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-2">
              <label for="name" class="form-label fw-bold"
                ><span class="text-danger">*</span> 收件人姓名</label
              >
              <Field
                id="name"
                name="姓名"
                type="text"
                v-model="form.user.name"
                class="form-control"
                placeholder="請輸入姓名"
                :class="{ 'is-invalid': errors['姓名'] }"
                rules="required"
              ></Field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-2">
              <label for="tel" class="form-label fw-bold"
                ><span class="text-danger">*</span> 收件人電話</label
              >
              <Field
                id="tel"
                name="電話"
                type="text"
                class="form-control"
                v-model="form.user.tel"
                placeholder="請輸入電話"
                :class="{ 'is-invalid': errors['電話'] }"
                rules="required|min:8|max:10"
              ></Field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-2">
              <label for="address" class="form-label fw-bold"
                ><span class="text-danger">*</span> 收件人地址</label
              >
              <Field
                id="address"
                name="地址"
                type="text"
                v-model="form.user.address"
                class="form-control"
                placeholder="請輸入地址"
                :class="{ 'is-invalid': errors['地址'] }"
                rules="required"
              ></Field>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-2">
              <label for="message" class="form-label fw-bold">留言 (選填)</label>
              <textarea id="message" class="form-control" cols="20" rows="10"></textarea>
            </div>
            <div class="d-flex justify-content-between">
              <a href="#/cart" class="btn-custom2 hvr-shutter-out-horizontal my-2"
                >上一步</a
              >
              <a href="#" class="btn-custom hvr-bounce-to-right my-2 not-allowed" disabled @click.prevent="toOrder">下一步</a>
            </div>
          </Form>
        </div>
        <div class="col-md-5">
          <div class="order">
            <h3 class="fw-bold text-center">訂單明細</h3>
            <hr class="bg-dark" style="opacity: 1" />
            <div
              class="orderDetail py-1 d-flex align-items-center"
              v-for="item in carts"
              :key="item.id"
            >
              <img :src="item.product.imageUrl" alt="" />
              <div class="title-price d-flex flex-column ms-2">
                <span class="fw-bold">{{ item.product.title }} </span>
                <span class="fw-bold text-danger">NT ${{ item.product.price }} </span>
              </div>
              <div class="num fw-bold ms-auto">X {{ item.qty }}</div>
            </div>
            <ul class="list-unstyled mt-2">
              <li class="fw-bold d-flex justify-content-between mb-1">
                <p>小計</p>
                <p>${{ totalPrice }}</p>
              </li>
              <li class="fw-bold d-flex justify-content-between">
                <p>外送費</p>
                <p class="text-success" v-if="totalPrice >= 599">$0</p>
                <p class="text-success" v-else>$80</p>
              </li>
            </ul>
            <small class="text-danger d-flex justify-content-end fw-bold"
              >消費金額滿599元免運費</small
            >
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="輸入優惠券"
                v-model="coupon"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span class="input-group-text send fw-bold" id="basic-addon1" @click="sendCoupon">送出</span>
            </div>
            <hr class="bg-dark" style="opacity: 1" />
            <div class="total d-flex justify-content-between">
              <h4 class="fw-bold">總金額</h4>
              <span class="fs-4 fw-bold" v-if="totalPrice >= 599">${{ totalPrice }}</span>
              <span class="fs-4 fw-bold" v-else>${{ totalPrice + 80 }}</span>
            </div>
            <div class="sale d-flex justify-content-between" v-if="salePrice !== 0">
              <h4 class="fw-bold text-danger">優惠價</h4>
              <span class="fs-4 fw-bold text-danger" v-if="totalPrice >= 599">${{ Math.round(salePrice) }}</span>
              <span class="fs-4 fw-bold text-danger" v-else>${{ Math.round(salePrice) + 80 }}</span>
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
      carts: [],
      isLoading: false,
      totalPrice: 0,
      coupon: '',
      salePrice: 0,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        }
      }
    }
  },
  inject: ['emitter'],
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        this.carts = res.data.data.carts
        this.getTotalPrice()
        this.isLoading = false
      })
    },
    getTotalPrice () {
      this.totalPrice = 0
      this.carts.forEach((item) => {
        this.totalPrice += item.total
      })
    },
    sendCoupon () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/coupon`
      const data = {
        code: this.coupon
      }
      this.$http.post(api, { data }).then(res => {
        if (res.data.success) {
          this.$sweetalert2(res)
          this.isLoading = false
          this.salePrice = res.data.data.final_total
        } else {
          this.$sweetalert2(res)
          this.isLoading = false
        }
      })
    },
    toOrder () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order`
      this.$http.post(api, { data: this.form }).then(res => {
        this.isLoading = false
        this.emitter.emit('update-cart')
        this.$router.push(`/order/${res.data.orderId}`)
      })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
