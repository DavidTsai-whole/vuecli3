<template>
    <div class="DashMain">
    <div class="container">
      <div class="text-end">
        <button type="button" class="btn btn-primary mt-5" @click="openModal(true)">新增優惠卷</button>
      </div>
      <div class="table-responsive">
      <table class="table table-success table-striped table-hover mt-3">
        <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th class="text-center">編輯</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" :key="item.id">
          <td>{{item.title}}</td>
          <td>{{item.percent}}</td>
          <td>{{item.due_date}}</td>
          <td>
          <span v-if="item.is_enabled === 1" class="text-success fw-bold">啟用</span>
          <span v-else class="text-danger fw-bold">停用</span>
          </td>
          <td class="text-center">
          <div class="btn-group">
          <button class="btn btn-secondary" @click="openModal(false, item )">編輯</button>
          <button class="btn btn-danger">刪除</button>
          </div>
          </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    <couponModal ref="couponModal" :data="tempProduct"></couponModal>
  </div>>
</template>
<script>
import couponModal from '@/components/CouponModal.vue'
export default {
  data () {
    return {
      coupons: [],
      tempProduct: {},
      isNew: false
    }
  },
  components: {
    couponModal
  },
  methods: {
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupons?${page}`
      this.$http.get(api).then(res => {
        if (res.data.success) {
          this.coupons = res.data.coupons
        }
      })
    },
    openModal (isNew, item) {
      this.isNew = isNew
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.$refs.couponModal.openModal()
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
