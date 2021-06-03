<template>
  <v-btn
    :style="styles"
    color="secondary"
    fab
    fixed
    href="https://store.vuetifyjs.com/product/blog-theme-free"
    rel="noopener"
    right
    target="_blank"
    top
  >
    <v-icon>
      mdi-vuetify
    </v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: 'CoreCta',

    computed: {
      styles () {
        return {
          marginTop: `${this.$vuetify.application.top}px`,
        }
      },
    },
  }
</script>
<style>
.v-btn--fab.v-btn--fixed {
    z-index: 6;
}
.v-btn--fixed.v-btn--top {
    top: 100px;
}
</style>
