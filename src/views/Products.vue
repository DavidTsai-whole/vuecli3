<template>
<Loading :active="isLoading"></Loading>
  <div class="products">
    <div class="banner bg-cover"></div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-4">
        <div class="left sticky-top">
        <div class="accordion accordionCategory my-2" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  商品分類
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul class="list-unstyled fw-bold">
                    <li><a href="#" @click.prevent="category = 'all'" :class="{active: category == 'all'}" >全部</a></li>
                    <li><a href="#" @click.prevent="category = 'burger'" :class="{active: category == 'burger'}">漢堡</a></li>
                    <li><a href="#" @click.prevent="category = 'dessert'" :class="{active: category == 'dessert'}">點心</a></li>
                    <li><a href="#" @click.prevent="category = 'drink'" :class="{active: category == 'drink'}">飲品</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion accordionFilter mt-lg-2 mt-0" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  條件篩選
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <select class="form-select" v-model="selected" aria-label="Default select example">
                    <option value="1">正常排序</option>
                    <option value="2">價格由低到高</option>
                    <option value="3">價格由高到低</option>
                  </select>
                  <div class="input-group mt-2">
                  <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
                  <input type="text" class="form-control" v-model="filterText" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1">
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-4 col-md-6 my-2" v-for="item in filterProduct" :key="item.id">
              <div class="card" @click="productDetail(item)">
                <div class="card-img">
                  <img :src="item.imageUrl" class="card-img-top" alt="" />
                  <ul class="action list-unstyled">
                    <li @click.stop="addCart(item)">
                      <i class="bi bi-cart" ></i>
                      <span>加入購物車</span>
                    </li>
                    <li v-if="favoriteData.indexOf(item.id) === -1" @click.stop="addFavorite(item.id)">
                      <i class="bi bi-heart"></i>
                      <span>追蹤商品</span>
                    </li>
                    <li class="active" v-else @click.stop="addFavorite(item.id)">
                      <i class="bi bi-heart"></i>
                      <span>取消追蹤</span>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div
                    class="card-title d-flex justify-content-between align-items-center"
                  >
                    <p class="fw-bold">{{ item.title }}</p>
                    <span class="badge rounded-pill bg-orange">{{ item.category }}</span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <del>原價 : {{ item.origin_price }}元</del>
                    <p class="text-primary fw-bold">特價 : {{ item.price }}元</p>
                  </div>
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
      isLoading: false,
      category: 'all',
      selected: '1',
      filterText: '',
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  inject: ['emitter'],
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false
          this.products = res.data.products
        }
      })
    },
    addCart (item) {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      const cartData = {
        product_id: item.id,
        qty: 1
      }
      this.isLoading = true
      this.$http.post(api, { data: cartData }).then(res => {
        if (res.data.success) {
          this.$sweetalert2(res)
          this.emitter.emit('update-cart')
          this.isLoading = false
        }
      })
    },
    productDetail (item) {
      this.$router.push(`/product/${item.id}`)
    },
    addFavorite (id) {
      const followId = this.favoriteData.indexOf(id)
      if (followId === -1) {
        this.favoriteData.push(id)
        this.$sweetalert('已加入追蹤')
      } else {
        this.favoriteData.splice(followId, 1)
        this.$sweetalert('已取消追蹤')
      }
      localStorage.setItem('favorite', JSON.stringify(this.favoriteData))
      this.emitter.emit('update-favorite')
    }
  },
  computed: {
    filterProduct () {
      const newFilter = []
      const vm = this
      if (vm.category === 'all') {
        return vm.products
          .filter(item => {
            return item.title.match(vm.filterText)
          })
          .sort((a, b) => {
            if (vm.selected === '2') {
              return a.price - b.price
            }
            if (vm.selected === '3') {
              return b.price - a.price
            }
          })
      } else if (vm.category === 'burger') {
        vm.products.forEach(item => {
          if (item.category === '漢堡') {
            newFilter.push(item)
          }
        })
        return newFilter
          .sort((a, b) => {
            if (vm.selected === '2') {
              return a.price - b.price
            }
            if (vm.selected === '3') {
              return b.price - a.price
            }
          })
          .filter(item => {
            return item.title.match(vm.filterText)
          })
      } else if (vm.category === 'dessert') {
        vm.products.forEach(item => {
          if (item.category === '點心') {
            newFilter.push(item)
          }
        })
        return newFilter
          .sort((a, b) => {
            if (vm.selected === '2') {
              return a.price - b.price
            }
            if (vm.selected === '3') {
              return b.price - a.price
            }
          })
          .filter(item => {
            return item.title.match(vm.filterText)
          })
      } else {
        vm.products.forEach(item => {
          if (item.category === '飲品') {
            newFilter.push(item)
          }
        })
        return newFilter
          .sort((a, b) => {
            if (vm.selected === '2') {
              return a.price - b.price
            }
            if (vm.selected === '3') {
              return b.price - a.price
            }
          })
          .filter(item => {
            return item.title.match(vm.filterText)
          })
      }
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
