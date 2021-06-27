import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: require('@/data/articles.json'),
    drawer: false,
    page: '',
    items: [
      {
        text: 'Home',
        to: '/',
      },
      {
        text: 'About',
        href: '/#about',
      },
      {
        text: 'What We Do',
        href: '/#whatwedo',
      },
      {
        text: 'Our Process',
        href: '/#ourprocess',
      },
      {
        text: 'Sectors',
        href: '/#sectors',
      },
      {
        text: 'Contact',
        href: '/#contact',
      },
      {
        text: 'Blog',
        to: '/blog',
      },
    ],
  },
  getters: {
    categories: state => {
      const categories = []

      for (const article of state.articles) {
        if (
          !article.category ||
          categories.find(category => category.text === article.category)
        ) continue

        const text = article.category

        categories.push({
          text,
          href: '#!',
        })
      }

      return categories.sort().slice(0, 4)
    },
    links: (state, getters) => {
      return state.items.concat(getters.categories)
    },
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    setPage: (state, payload) => (state.page = payload),
  },
  actions: {},
})
