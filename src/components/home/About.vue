<template>
  <v-container
    id="about"
    tag="section"
  >
    <base-subheading class="mt-15">
      About Us
    </base-subheading>

    <p>
      Ink & Associatez are your online accountants. We are technology focused virtual
      Accountanting firm with extensive small and medium sized business experience.
      With the use of technology, we are able to reduce administrative burden facing businesses
    </p>
    <p>
      We provide bookkeeping, controllership, CFO, year end and tax services, among other services that
      focuses on improvement business process and automation. We are online and acessible 24/7.
    </p>
    <p>
      We are here to help you save a lot time, helping you to realize your goal and also help in preparing your for what lies a head.
    </p>
    <v-row class="mt-4">
      <v-col class="text-center">
        <h4>
          <div>
            <v-icon
              x-large
              class="fas fa-hourglass"
            />
          </div> <div class="mb-4 mt-1">
            Save time
          </div>
        </h4>
        <p>
          By reducing administration time through automation, business owners
          can focus on their business and avoid using their weekends to catch up. <!---Fix this to include indiviudals-->
        </p>
      </v-col>
      <v-col class="text-center">
        <h4>
          <div>
            <v-icon
              x-large
              class="fas fa-home"
            />
          </div> <div class="mb-4 mt-1">
            Realize your goal
          </div>
        </h4>
        <p>
          We work with both individuals and business owners to determine their goals
          whether that is more money, more time with their family or specific needs/goals.
        </p>
      </v-col>
      <v-col class="text-center">
        <h4>
          <div>
            <h1>
              <v-icon
                x-large
                class="fas fa-chart-line"
              />
            </h1>
          </div> <div class="mb-4 mt-1">
            Prepare for what's ahead
          </div>
        </h4>
        <p>
          We provide proactive advice results in real time collaboration between the individual and business
          owner and the accountant when the issue occurs (not 3-6 months after year end).
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeAbout',
  }
</script>
<style scoped>
.v-container{
  z-index: 15;
}
</style>
