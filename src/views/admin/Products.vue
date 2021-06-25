<template>
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
    <!--git <DelModal ref="delModal"></DelModal>-->
  </div>
</template>
<script>
import ProductModal from '@/components/ProductModal.vue'
// import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Pagination.vue'
export default {
  data () {
    return {
      products: [],
      pagination: {},
      isNew: false,
      tempProduct: {}
    }
  },
  components: {
    ProductModal,
    Pagination
    // DelModal

  },
  methods: {
    // 取得所有產品資料
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http.get(api).then(res => {
        if (res.data.success) {
          this.products = res.data.products
          this.pagination = res.data.pagination
        } else {
          alert(res.data.message)
        }
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
          alert(res.data.message)
          newModal.hideModal()
          this.getProducts(this.pagination.current_page)
        } else {
          alert(res.data.message)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 刪除產品
    delModal () {
      const newModal = this.$refs.delModal
      newModal.openModal()
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
