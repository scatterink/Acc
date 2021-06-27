<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
  >
    <v-list>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :href="link.href ? link.href.substring(1) : undefined"
        @click.prevent.capture="onClick($event, link)"
      >
        <v-list-item-title v-text="link.text" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations, mapState,
  } from 'vuex'

  export default {
    name: 'CoreDrawer',

    computed: {
      ...mapGetters(['links']),
      ...mapState(['page']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.setDrawer(val)
        },
      },
    },

    methods: {
      ...mapMutations(['setDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to === '/' || (this.page === 'Blog' && item.href?.substring(0, 2) === '/#')) {
          if (!item.href) {
            if (this.page === 'Blog') {
              this.$router.push({ path: '/' })
            } else {
              this.$vuetify.goTo(0)
            }
          } else {
            this.$router.push({ path: '/', hash: item.href.substring(2) })
          }
          this.setDrawer(false)
          return
        }

        if (item.to === '/blog' && this.page !== 'Blog') {
          this.$router.push({ path: '/blog' })
          this.setDrawer(false)
          return
        }

        if (item.to || !item.href || this.page === 'Blog') return

        this.$vuetify.goTo(item.href === '/' ? 0 : item.href === '/blog' ? 1 : item.href.substring(1))
        this.setDrawer(false)
      },
    },
  }
</script>
