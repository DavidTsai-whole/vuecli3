<template>
  <Loading :active="isLoading"></Loading>
  <div class="cart">
    <div class="banner bg-cover"></div>
    <div class="container mt-5">
      <div class="row">
        <div class="col text-center">
          <h2 class="fw-bold mb-5">購物車</h2>
          <a
            href="#"
            class="btn-custom hvr-bounce-to-right mb-2"
            v-if="cartData.length !== 0"
            @click.prevent="allDelete"
            >全部刪除</a
          >
          <div class="table-responsive-xxl" v-if="cartData.length !== 0">
          <table
            class="table fs-4 align-middle table-borderless"
          >
            <thead class="border-bottom border-dark">
              <tr>
                <th>產品圖片</th>
                <th>產品名稱</th>
                <th>數量</th>
                <th>價格</th>
                <th>刪除</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartData" :key="item.id" class="border-bottom">
                <td>
                  <img :src="item.product.imageUrl" alt="" />
                </td>
                <td>{{ item.product.title }}</td>
                <td>
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button
                      type="button"
                      @click="reduceQty(item)"
                      class="btn btn-primary"
                      :class="{ disabled: item.qty === 1 }"
                    >
                      <i class="bi bi-dash-lg text-white"></i>
                    </button>
                    <input
                      type="number"
                      min="1"
                      class="form-control text-center rounded-0"
                      @change="updateCart(item)"
                      v-model.number="item.qty"
                    />
                    <button type="button" @click="addQty(item)" class="btn btn-primary">
                      <i class="bi bi-plus-lg text-white"></i>
                    </button>
                  </div>
                </td>
                <td>{{ item.product.price }}</td>
                <td>
                  <a href="#" class="text-danger" @click.prevent="delSingle(item)">
                    <i class="bi bi-x-square"></i>
                  </a>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="5" class="fw-bold text-end">總計:</td>
                <td class="text-danger fw-bold">${{ totalPrice }}</td>
              </tr>
            </tfoot>
          </table>
          </div>
          <div class="noCart" v-else>
            <h4 class="fw-bold mb-5">哎呀！您的購物車是空的，趕快去挑選商品吧！</h4>
            <img src="https://upload.cc/i1/2021/07/13/OGfKXe.jpg" alt="" />
            <a href="#/products" class="btn-custom2 hvr-shutter-out-horizontal my-2"
              ><i class="bi bi-reply-fill"></i>立刻購物</a
            >
          </div>
          <div class="btn d-flex justify-content-between" v-if="cartData.length !== 0">
            <a href="#/products" class="btn-custom2 hvr-shutter-out-horizontal my-2"
              ><i class="bi bi-reply-fill"></i>繼續購物</a
            >
            <a href="#/checkout" class="btn-custom hvr-bounce-to-right my-2">下一步</a>
          </div>
        </div>
      </div>
    </div>
    <DelModal ref="del" :data="tempProduct" @update-delete="updateDelete"></DelModal>
  </div>
</template>

<script>
import DelModal from '@/components/DelModal.vue'
export default {
  data () {
    return {
      isLoading: false,
      cartData: [],
      tempProduct: {},
      totalPrice: 0
    }
  },
  inject: ['emitter'],
  components: {
    DelModal
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.cartData = res.data.data.carts
          this.getTotalPrice()
          this.isLoading = false
        }
      })
    },
    delSingle (item) {
      this.tempProduct = { ...item }
      this.$refs.del.openModal()
    },
    updateDelete (id) {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false
          this.getCart()
          this.$sweetalert2(res)
          this.getTotalPrice()
          this.emitter.emit('update-cart')
        }
      })
      this.$refs.del.hideModal()
    },
    allDelete () {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/carts`
      this.isLoading = true
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.$sweetalert2(res)
          this.emitter.emit('update-cart')
          this.isLoading = false
          this.getCart()
        }
      })
    },
    getTotalPrice () {
      const vm = this
      vm.totalPrice = 0
      vm.cartData.forEach((item) => {
        this.totalPrice += item.total
      })
    },
    addQty (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      item.qty += 1
      const cart = {
        product_id: item.id,
        qty: item.qty
      }
      this.$http.put(api, { data: cart }).then((res) => {
        if (res.data.success) {
          this.$sweetalert2(res)
          this.getCart()
          this.isLoading = false
        }
      })
    },
    reduceQty (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      item.qty -= 1
      const cart = {
        product_id: item.id,
        qty: item.qty
      }
      this.$http.put(api, { data: cart }).then((res) => {
        if (res.data.success) {
          this.$sweetalert2(res)
          this.getCart()
          this.isLoading = false
        }
      })
    },
    updateCart (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.id,
        qty: item.qty
      }
      this.$http.put(api, { data: cart }).then((res) => {
        if (res.data.success) {
          this.$sweetalert2(res)
          this.getCart()
          this.isLoading = false
        }
        if (res.data.success && item.qty === 0) {
          this.updateDelete(item.id)
        }
      })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
