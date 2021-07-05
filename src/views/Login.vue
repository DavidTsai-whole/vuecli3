<template>
  <div class="container">
    <div class="main row">
      <div class="col-8 col-md-5 m-auto">
        <form class="loginForm p-5" @submit.prevent="goToAdmin">
          <h1 class="fw-bold text-center">登入頁面</h1>
          <label for="account">帳號</label>
          <input type="email" id="account" placeholder="email" class="form-control mb-2"
            v-model="user.username"
          />

          <label for="password">密碼</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            class="form-control"
            v-model="user.password"
          />
           <div class="form-check mt-3">
           <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label ms-1" for="exampleCheck1">記住我</label>
           </div>

          <!--d-block改成在外層加上d-grid-->
          <div class="d-grid mt-2">
            <button class="btn btn-lg btn-primary">登入</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
    goToAdmin () {
      const api = `${process.env.VUE_APP_URL}admin/signin`
      this.$http.post(api, this.user).then(res => {
        if (res.data.success) {
          const { token, expired } = res.data
          document.cookie = `hexToken=${token};expires=${new Date(expired)}`
          this.$router.push('/admin/products')
        } else {
          alert(res.data.message)
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
