<template>
  <base-card
    dark
    class="mt-15"
  >
    <v-img
      :src="require('@/assets/articles/blurcamera.png')"
      class="grey lighten-2"
      height="400"
      width="100%"
    >
      <v-row
        class="fill-height pa-3"
        align="center"
      >
        <v-col
          cols="12"
          md="7"
          offset-md="8"
        >
          <h1 class="text-h2 font-weight-light">
            The Art Of Travel
          </h1>

          <div class="subheading text-uppercase pl-2 mb-4">
            Finding Beauty, One flight at a time
          </div>

          <v-btn
            color="primary"
            depressed
          >
            Subscribe
          </v-btn>
        </v-col>
      </v-row>
    </v-img>
  </base-card>
</template>

<script>
  export default {
    name: 'HomeBanner',
  }
</script>
<style>
.base-card{
  z-index: 15;
}
</style>
