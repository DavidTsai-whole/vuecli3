export default function (res) {
  if (res.data.success) {
    this.$swal({
      icon: 'success',
      title: res.data.message,
      confirmButtonText: '了解'
    })
  } else {
    this.$swal({
      icon: 'error',
      title: res.data.message,
      confirmButtonText: '了解'
    })
  }
}
