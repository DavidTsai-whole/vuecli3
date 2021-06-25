<template>
    <div class="DashMain">
    <div class="container">
      <div class="text-end">
        <button type="button" class="btn btn-primary mt-5">新增優惠卷</button>
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
          <tr>
          <td class="text-center">
          <div class="btn-group">
          <button type="button" class="btn btn-secondary">編輯</button>
          <button type="button" class="btn btn-danger">刪除</button>
          </div>
          </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>>
</template>
<script>
export default {
  data () {
    return {
      toggle: 'coupon'
    }
  }
}
</script>
