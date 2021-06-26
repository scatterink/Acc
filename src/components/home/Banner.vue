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
          <h1 class="text-h3 font-weight-dark">
            Redefining Accounting
          </h1>

          <div class="subheading text pl-2 mb-4">
            <h3> Do what you do best, and let us take care of the rest.</h3>
          </div>
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
