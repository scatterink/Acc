<template>
  <v-app-bar
    app
    flat
    min-height="110"
    class="mb-10"
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-container class="mx-auto py-1">
      <v-row
        align="center"
        class="mt-10 w-100"
      >
        <v-col style="flex-grow: 0">
          <v-img
            :src="require('@/assets/logo.png')"
            class="mr-5"
            contain
            height="170"
            width="170"
            max-width="200"
            @click="$vuetify.goTo(0)"
          />
        </v-col>
        <v-col>
          <v-btn
            v-for="(link, i) in links"
            :key="i"
            v-bind="link"
            class="hidden-sm-and-down"
            text
            @click="onClick($event, link)"
          >
            {{ link.text }}
          </v-btn>
        </v-col>
        <!--- <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />-->
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
    mapState,
  } from 'vuex'

  export default {
    name: 'CoreAppBar',

    computed: {
      ...mapGetters(['links']),
      ...mapState(['page']),
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to === '/' && this.page === 'Home') this.$vuetify.goTo(0)

        if (item.to || !item.href || this.page !== 'Home') return

        this.$vuetify.goTo(item.href === '/' ? 0 : item.href === '/blog' ? 1 : item.href.substring(1))
      },
    },
  }
</script>
