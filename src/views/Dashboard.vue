<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary justify-content-center">
    <div class="container">
      <a class="navbar-brand fw-bold d-block" href="#">ADMIN</a>
      <input class="navSearch form-control" type="text" placeholder="尋找" />
      <button class="btn btn-outline-light" @click="logout">登出</button>
    </div>
  </nav>

  <div class="DashSidebar d-flex flex-column p-3 text-white bg-dark">
    <span class="fs-2 text-center">Sidebar</span>
    <ul class="nav nav-pills flex-column">
      <li class="nav-item">
        <router-link to="/admin/products"  class="nav-link active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-basket2 me-1"
            viewBox="0 0 16 16"
          >
            <path
              d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"
            />
            <path
              d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"
            />
          </svg>
          Product
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/admin/coupons" class="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-wallet2 me-1"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"
            />
          </svg>
          Coupon
        </router-link>
      </li>
    </ul>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
      toggle: 'product'
    }
  },
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_URL}logout`
      this.$http
        .post(api)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/login')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_URL}api/user/check`
    this.$http
      .post(api)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
