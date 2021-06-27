<template>
  <div id="blog">
    {{ page }}
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Blog',
    computed: {
      ...mapState(['page']),
    },
  }
</script>
<style lang="css" scoped>
#blog {
  margin-top: 70px;
}
</style>
