<template>
  <v-tooltip left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        :style="styles"
        color="secondary"
        fab
        fixed
        rel="noopener"
        right
        target="_blank"
        top
        v-on="on"
        @click="$vuetify.goTo('#contact')"
      >
        <v-icon>
          mdi-phone
        </v-icon>
      </v-btn>
    </template>
    <span>Contact Us.</span>
  </v-tooltip>
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
