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
          <td>{{item.percent}}%</td>
          <td>{{ $filters.date(item.due_date)}}</td>
          <td>
          <span v-if="item.is_enabled === 1" class="text-success fw-bold">啟用</span>
          <span v-else class="text-danger fw-bold">停用</span>
          </td>
          <td class="text-center">
          <div class="btn-group">
          <button class="btn btn-secondary" @click="openModal(false, item )">編輯</button>
          <button class="btn btn-danger"  @click="delModal(item)">刪除</button>
          </div>
          </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    <couponModal ref="couponModal" :data="tempCoupon" @update-coupon="updateCoupon" :isNew="isNew"></couponModal>
    <delModal ref="dcModal" :data="tempCoupon" @update-delete="updateDelete"></delModal>
  </div>>
</template>
<script>
import couponModal from '@/components/CouponModal.vue'
import delModal from '@/components/DelModal.vue'
export default {
  data () {
    return {
      coupons: [],
      tempCoupon: {},
      isNew: false
    }
  },
  components: {
    couponModal,
    delModal
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
        this.tempCoupon = {
          due_date: Math.floor(Date.now() / 1000),
          is_enabled: 0,
          percent: 100
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.$refs.couponModal.openModal()
    },
    updateCoupon (item) {
      let api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      if (!this.isNew) {
        httpMethod = 'put'
        api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
      }
      this.$http[httpMethod](api, { data: item }).then(res => {
        if (res.data.success) {
          alert(res.data.message)
          this.getCoupons()
          this.$refs.couponModal.hideModal()
        } else {
          alert(res.data.message)
        }
      }).catch(error => {
        console.log(error)
      })
    },
    delModal (item) {
      this.tempCoupon = { ...item }
      this.$refs.dcModal.openModal()
    },
    updateDelete (id) {
      const api = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`
      this.$http.delete(api).then(res => {
        if (res.data.success) {
          alert(res.data.message)
          this.getCoupons()
          this.$refs.dcModal.hideModal()
        } else {
          alert(res.data.message)
        }
      }).catch(error => {
        console.log(error)
      })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
