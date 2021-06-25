<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{disabled: !pages.has_pre}">
        <a
          class="page-link"
          @click.prevent="$emit('update-page', pages.current_page - 1)"
          href="#"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{ active: pages.current_page === item }"
        v-for="item in pages.total_pages"
        :key="item"
      >
        <a class="page-link" @click.prevent="$emit('update-page', item)" href="#">{{ item }}</a>
      </li>

      <li class="page-item" :class="{disabled: !pages.has_next}">
        <a
          class="page-link"
          @click.prevent="$emit('update-page', pages.current_page + 1)"
          href="#"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages']
}
</script>
