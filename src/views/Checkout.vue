<template>
  <Loading :active="isLoading"></Loading>
  <div class="checkout">
    <div class="banner bg-cover"></div>
    <div class="container mt-5">
      <div class="row mb-4">
        <div class="col-7">
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
              <a href="#/checkout" class="btn-custom hvr-bounce-to-right my-2">下一步</a>
            </div>
          </Form>
        </div>
        <div class="col-5">
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
              <li class="fw-bold"><p>小計</p></li>
              <li class="fw-bold"><p>運費</p></li>
            </ul>
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
      isLoading: false
    }
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        this.carts = res.data.data.carts
        this.isLoading = false
      })
    },
    getTotalPrice () {

    }
  },
  created () {
    this.getCart()
  }
}
</script>
