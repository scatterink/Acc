import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#CBAA5C',
        secondary: '#083759',
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
})
