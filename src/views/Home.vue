<template>
  <div id="home">
    <articles>
      <banner />
      <!----</articles>--->

      <about />
      <whatwedo />
      <prices />
      <!---<subscribe />-->

      <!---<social />--->
      <contact />
    </articles>
  </div>
</template>

<script>
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
      prices: () => import('@/components/home/Prices'),
    },
  }
</script>
