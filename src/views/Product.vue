<template>
{{id}}
</template>

<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  created () {
    const { id } = this.$route.params
    this.id = id
  }
}
</script>
