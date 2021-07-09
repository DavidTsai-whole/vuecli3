<template>
  <Loading :active="isLoading"></Loading>
  <div class="products">
    <div class="banner bg-cover"></div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-4">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance,
                  as well as the showing and hiding via CSS transitions. You can modify
                  any of this with custom CSS or overriding our default variables. It's
                  also worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-6" v-for="item in products" :key="item.id">
              <div class="card" style="width: 18rem">
                <img :src="item.imageUrl" class="card-img-top" alt="" />
                <div class="card-body">
                  <p class="card-title fs-5 mb-0 fw-bold">
                  {{item.title}}
                  </p>
                </div>
              </div>
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
      products: [],
      isLoading: false
    }
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products
          this.isLoading = false
        }
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
