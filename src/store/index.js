import { Collections } from '@/models/collections'
import { Products } from '@/models/products'
import { createStore } from 'vuex'
import { Company } from '../models/company'
export default createStore({
  
  state: {
    racine: "https://preprod.genuka.com/api/2021-10/",
    token: null,
    company: new Company(),
    backgroundcolor : 'black',
    collections: new Collections(),
    products: new Products()
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
    },
    collections: state=>{
      return state.collections
    },
    products: state=>{
      return state.products
    }


  },
  
  
  mutations: {
    UPDATE_COMPANY(state, payload) {
      state.company = payload;
    },
    
    CREATE_COLLECTIONS(state, payload) {
      state.collections = payload;
    },
    
    CREATE_PRODUCTS(state, payload) {
      state.products = payload;
    }


  },
  actions: {
  },
  modules: {
  }
})
