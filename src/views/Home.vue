<template>
  <div id="home">
    <banner />
    <!----</articles>--->

    <about />
    <whatwedo />
    <ourprocess />
    <sectors />
    <!---<subscribe />-->

    <!---<social />--->
    <contact />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Home',
    components: {
      About: () => import('@/components/home/About'),
      /* Articles: () => import('@/components/home/Articles'), */
      Banner: () => import('@/components/home/Banner'),
      /* Social: () => import('@/components/home/Social'),*\
      /* Subscribe: () => import('@/components/home/Subscribe'), */
      Contact: () => import('@/components/home/Contact'),
      whatwedo: () => import('@/components/home/Whatwedo'),
      ourprocess: () => import('@/components/home/Ourprocess'),
      sectors: () => import('@/components/home/Sectors'),
    },
    computed: {
      ...mapState(['blog']),
    },
    mounted () {
      setTimeout(() => {
        if (this.$router.currentRoute.hash) {
          this.$vuetify.goTo(this.$router.currentRoute.hash)
        }
      }, 1e3)
    },
  }
</script>
