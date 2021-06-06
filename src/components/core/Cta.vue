<template>
  <v-btn
    :style="styles"
    color="secondary"
    fab
    fixed
    rel="noopener"
    right
    target="_blank"
    top
    href="$router.push('#contact')"
  >
    <v-icon>
      mdi-phone
    </v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: 'CoreCta',
    /* data: () => ({
      link: '/#contact',
    }), */

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
