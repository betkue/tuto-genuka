import { createStore } from 'vuex'
import { Company } from '../models/company'
export default createStore({
  state: {
    racine: "https://preprod.genuka.com/api/2021-10/",
    token: null,
    company: new Company(),
    backgroundcolor : 'black',
  },
  getters: {
    company: state => {
      return state.company
    },
    token: state => {
      return state.token
    },
    racine: state => {

      return `${state.racine}`
    }


  },
  
  
  mutations: {
    UPDATE_COMPANY(state, payload) {
      state.company = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
