import { Collections } from '@/models/collections'
import { Products, Product_Single } from '@/models/products'
import { createStore } from 'vuex'
import { Company } from "@/models/company";
import axios from "axios";
import { Panier } from '@/models/panier';

let api = "https://preprod.genuka.com/api/2021-10/"




let store = createStore({


  state: {
    racine: api,
    token: null,
    timeReset: 20000,
    company: new Company(),
    backgroundcolor: 'black',
    collections: new Collections(),
    products: new Products(),
    single_collection: new Collections(),
    single_product: new Product_Single(),
    panier : new Panier(),
    idProduct : null,
    idCollection : null ,
  },
  Plugin: [

  ],
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
    collections: state => {
      return state.collections
    },
    products: state => {
      return state.products
    },
    panier: state => {
      return state.panier
    },
    single_product: state => {

      return `${state.single_product}`
    },
    single_collection: state => {
      return state.single_collection
    },
    idProduct: state => {
      return state.idProduct
    },
    idCollection: state => {
      return state.idCollection
    }


  },


  mutations: {
    UPDATE_COMPANY(state, payload) {
      state.company = payload;/* 
      console.log("payload" + payload.id ?? "null")
      console.log("state.company" + state.company) */
    },
    async GET_COMPANY(state) {

      if (state.company.id == null) {
        let company = new Company();
        let prod = new Products();
        let collec = new Collections();
        let domaine =
          document.location.protocol + "//" + document.location.hostname;



        // let  timerID = setTimeout(lose(), 500);
        axios
          .get(api + "companies/byurl?url=" + domaine)
          .then((response) => {
            if (response.status == 200) {
              let json = response.data;
              company.fromJson(json);

              let url1 = api + "companies/" + company.id + "/collections";
              axios.get(url1).then(

                (response) => {

                  if (response.status == 200) {

                    collec.fromJson(response.data);
                    let url2 = api + "companies/" + company.id + "/products";
                    axios.get(url2).then(
                      (response) => {
                        if (response.status == 200) {
                          prod.fromJson(response.data)
                          state.products = prod;
                          state.collections = collec;
                          state.company = company;

                        }
                        else {
                          state.products.data = null;
                          state.collections = collec;
                          state.company = company;
                        }
                      }
                    );
                  }
                  else {
                    state.collections.data = null
                    state.company = company;
                  }
                })


            }
            else {
              state.company.id = -404
              console.log(state.company)
            }
          })

          ;

      }
    },
    async GET_COLLECTIONS(state, payload) {
      let complement = payload.data == null ? "" : "?per_page=" + payload.data.nbr + "?per_page=" + payload.data.page + "&sort_by=" + payload.data.sort_by + "&sort_dir=" + payload.sort_dir;

      let url = payload.link ?? api + "companies/" + state.company.id + "/collections" + complement;
      let collec = new Collections();
      //console.log(url);
      axios.get(url).then(
        (response) => {

          if (response.status == 200) {

            collec.fromJson(response.data);
            
              if (payload.link == null) {
                state.collections = collec;
              }
              else{

                for (let index = 0; index < collec.length; index++) {
                  state.collections.data.push(collec[index]);
                  
                }
                state.collections.link = collec.link
                state.collections.meta = collec.meta
              }
          }
          else {
            state.collections.data = null
          }
        }
      );
    },
    async GET_PRODUCTS(state, payload) {
      {
        let complement = payload.data == null ? "" : "?per_page=" + payload.data.nbr + "?per_page=" + payload.data.page + "&sort_by=" + payload.data.sort_by + "&sort_dir=" + payload.data.sort_dir;
        let url = payload.link ?? api + "companies/" + state.company.id + "/products" + complement;
        let prod = new Products();
        console.log(url);
        axios.get(url).then(
          (response) => {
            if (response.status == 200) {
              prod.fromJson(response.data)
              if (payload.link == null) {
                state.products = prod;
              }
              else{

                for (let index = 0; index < prod.length; index++) {
                  state.products.data.push(prod[index]);
                  
                }
                
                state.products.link = prod.link
                state.products.meta = prod.meta

              }

            }
            else {
              state.products.data = null
            }
          }
        );
      }
    },
    ADD_PRODUCT_PANIER(state, payload) {
      let contain = false;
      for (let index = 0; index < state.panier.products.length; index++) {
        const element = state.panier.products[index];
        if (element.id ==payload.id) {

          contain = true;
          
        }
      }

      contain ? null : state.panier.products.push(payload) ;
      state.panier.push(payload)
      return contain;
    },
    DELETE_PRODUCT_PANIER(state, payload) {
      let contain = false;
      for (let index = 0; index < state.panier.products.length; index++) {
        const element = state.panier.products[index];
        if (element.id ==payload.id) {

          state.panier.products.splice(index)
          contain = true;
          
        }
      }
      return contain;
    },
    RESET_PRODUCT_PANIER(state) {
      state.panier.products = [];
    },
    RESET_PANIER(state) {
      state.panier = new Panier();
    },
    SET_IDPRODUCT(state,payload) {
      state.idProduct = payload;
    },
    SET_IDCOLLECTION(state,payload) {
      state.idCollection = payload;
    },
    SET_SINGLE_PRODUCT(state,payload) {
      state.single_product = payload;
    },
    SET_SINGLE_COLLECTION(state,payload) {
      state.single_collection = payload;
    },


  },
  actions: {
  },
  modules: {
  }
})

export default store




