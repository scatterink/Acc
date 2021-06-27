<template>
  <v-container
    id="contact"
    tag="section"
  >
    <base-card
      color="rgba(203, 170, 92, 0.51)"
      class="pa-3 mt-12"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="5"
          >
            <v-form
              v-if="!messageWasSent"
              ref="form"
              @submit.prevent
            >
              <base-subheading class="mb-3">
                Get In Touch With Us:
              </base-subheading>
              <p>
                Learn Why Companies use Ink & Associatez
              </p>
              <v-row class="pa-2">
                <v-responsive
                  class="overflow-visible mr-2"
                  max-width="500"
                >
                  <v-text-field
                    hide-details
                    label="Name"
                    solo
                    type="text"
                    name="user_name"
                  />
                </v-responsive>
              </v-row>
              <v-row class="pa-2">
                <v-responsive
                  class="overflow-visible mr-2"
                  max-width="500"
                >
                  <v-text-field
                    hide-details
                    label="Your Email Address"
                    solo
                    type="text"
                    name="user_email"
                  />
                </v-responsive>
              </v-row>
              <v-row class="pa-2">
                <v-responsive
                  class="overflow-visible mr-2"
                  max-width="500"
                >
                  <v-text-field
                    hide-details
                    label="Phone Number"
                    solo
                    type="text"
                    name="user_tel"
                  />
                </v-responsive>
              </v-row>
              <v-row class="pa-2">
                <v-responsive
                  class="overflow-visible mr-2"
                  max-width="500"
                >
                  <!---- <v-text-field
                      hide-details
                      label="Message"
                      solo
                      min-height="400"
                    /> --->
                  <v-textarea
                    solo
                    label="Message"
                    type="text"
                    name="user_message"
                  />
                </v-responsive>
              </v-row>

              <v-row class="pa-2">
                <v-btn
                  :block="$vuetify.breakpoint.xsOnly"
                  class="ma-0"
                  color="secondary"
                  style="height: 55px"
                  type="submit"
                  value="send"
                  @click.prevent="sendEmail($event)"
                >
                  Submit
                </v-btn>
              </v-row>
            </v-form>
            <div v-else>
              <img
                :src="require('@/assets/young-beautiful-woman-using-laptop-600w-1908448339.webp')"
                style="width: 100%"
              >
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            offset-md="1"
          >
            <base-subheading>Contact</base-subheading>

            <v-list class="transparent">
              <v-list-item>
                <v-list-item-avatar
                  color="primary"
                >
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-email-outline
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>EMAIL</v-list-item-title>

                <v-list-item-subtitle>
                  INKASSOCIATEZ@GMAIL.COM
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-map-marker
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>ADDRESS</v-list-item-title>

                <v-list-item-subtitle>
                  <div> John's Town,</div>
                  <div> Beckford Town P.A,</div>
                  <div> St. Thomas,</div>
                  <div> Jamaica,</div>
                  <div class="mb-2" />
                  <div> 42 Rue Bedard,</div>
                  <div> Gatinea, Quebec,</div>
                  <div> Canada</div>
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-phone
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>PHONE</v-list-item-title>

                <v-list-item-subtitle>
                  <div>(JA)876-598-3780</div>
                  <div>(CA)819-598-3780</div>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </base-card>
  </v-container>
</template>

<script>
  import emailjs from 'emailjs-com'
  export default {
    name: 'HomeContact',
    data: () => ({
      messageWasSent: false,
    }),

    methods: {
      sendEmail: function () {
        const form = this.$refs.form
        emailjs.sendForm('service_inkassociatez', 'template_inkassociatez', form.$el, 'user_Lk2ynUaMtWJHXCWDcBEoW')
          .then((result) => {
            this.messageWasSent = true
            console.log('SUCCESS!', result.status, result.text)
          }, (error) => {
            console.log('FAILED...', error)
          })
      },
    },

  }
</script>
