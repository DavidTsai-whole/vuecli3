<template>
<Loading :active="isLoading"></Loading>
  <div class="DashMain">
    <div class="container">
      <div class="text-end">
        <button type="button" class="btn btn-primary mt-5" @click="openModal(true)">新增產品</button>
      </div>
      <div class="table-responsive">
      <table class="table table-success table-striped table-hover mt-1">
        <thead>
        <tr>
          <th>產品種類</th>
          <th>產品名稱</th>
          <th>原價</th>
          <th>售價</th>
          <th>是否啟用</th>
          <th class="text-center">編輯</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
          <td>{{item.category}}</td>
          <td>{{item.title}}</td>
          <td>{{item.origin_price}}</td>
          <td>{{item.price}}</td>
          <td>
          <span v-if="item.is_enabled" class="text-success">啟用</span>
          <span v-else class="text-danger">停用</span>
          </td>
          <td class="text-center">
          <div class="btn-group">
          <button type="button" class="btn btn-secondary" @click="openModal(false, item)">編輯</button>
          <button type="button" class="btn btn-danger" @click="delModal(item)">刪除</button>
          </div>
          </td>
          </tr>
        </tbody>
      </table>
      </div>
       <pagination :pages="pagination" @update-page="getProducts"></pagination>
    </div>
    <ProductModal ref="productModal" :product="tempProduct" :isNew="isNew" @update-products="updateProducts"></ProductModal>
    <DelModal ref="dpModal" :data="tempProduct" @update-delete="updateDelete"></DelModal>
  </div>
</template>
<script>
import ProductModal from '@/components/ProductModal.vue'
import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Pagination.vue'
export default {
  data () {
    return {
      products: [],
      pagination: {},
      isNew: false,
      isLoading: false,
      tempProduct: {}
    }
  },
  components: {
    ProductModal,
    Pagination,
    DelModal

  },
  methods: {
    // 取得所有產品資料
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.isLoading = true
      this.$http.get(api).then(res => {
        if (res.data.success) {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
        }
      }).catch(error => {
        console.log(error)
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
        this.isNew = true
      } else {
        this.tempProduct = { ...item }
        this.isNew = false
      }
      const newModal = this.$refs.productModal
      newModal.openModal()
    },
    // 新增跟編輯產品的確認更新鍵
    updateProducts (item) {
      this.tempProduct = item
      let api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product`
      const newModal = this.$refs.productModal
      let httpMethod = 'post'
      if (!this.isNew) {
        httpMethod = 'put'
        api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      }
      this.$http[httpMethod](api, { data: this.tempProduct }).then(res => {
        if (res.data.success) {
          this.$sweetalert2(res)
          newModal.hideModal()
          this.getProducts(this.pagination.current_page)
        } else {
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 刪除產品
    delModal (item) {
      this.tempProduct = { ...item }
      this.$refs.dpModal.openModal()
    },
    // 刪除確認鍵
    updateDelete (id) {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${id}`
      this.$http.delete(api).then(res => {
        if (res.data.success) {
          this.$sweetalert2(res)
          this.getProducts(this.pagination.current_page)
          this.$refs.dpModal.hideModal()
        }
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
