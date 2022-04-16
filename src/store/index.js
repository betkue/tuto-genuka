import { Collections } from '@/models/collections'
import { Products, Product_Single } from '@/models/products'
import { createStore } from 'vuex'
import { Company } from "@/models/company";
import axios from "axios";
import { Panier } from '@/models/panier';
import { SingleCollection } from '@/models/single_collection';
import { UserAuth } from '@/models/user_auth';

let api = "https://preprod.genuka.com/api/2021-10/"




let store = createStore({


  state: {
    racine: api,//url api
    token: null,//access token (connexion inscription)
    timeReset: 20000,//le delais d'attente des requetes
    company: new Company(),// company
    backgroundcolor: 'black',//
    collections: new Collections(),
    products: new Products(),
    single_collection: new SingleCollection(),
    single_product: new Product_Single(),
    panier: new Panier(),
    user: new UserAuth(),
    idProduct: null,
    idCollection: null,
    login: "company"
  },
  Plugin: [

  ],
  getters: {
    login: state => {
      return state.login
    },
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
      state.company = payload;
    },
    UPDATE_TOKEN(state, payload) {
      state.token = payload;
    },
    async GET_COMPANY(state) {


      if (state.company.id == null) {
        state.login = "company";
        let company = new Company();
        let prod = new Products();
        let collec = new Collections();
        let domaine =
          document.location.protocol + "//" + document.location.hostname;//nom de domaine



        axios
          .get(api + "companies/byurl?url=" + domaine)
          .then((response) => {
            if (response.status == 200) {
              state.login = "collection";
              let json = response.data;
              company.fromJson(json);

              let url1 = api + "companies/" + company.id + "/collections";
              axios.get(url1).then(

                (response) => {

                  if (response.status == 200) {
                    state.login = "products";

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
                    state.products.data = null;
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
            else {

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
              else {

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
        if (element.id == payload.id) {

          contain = true;

        }
      }

      contain ? null : state.panier.products.push(payload);
      state.panier.push(payload)
      return contain;
    },
    DELETE_PRODUCT_PANIER(state, payload) {
      let contain = false;
      for (let index = 0; index < state.panier.products.length; index++) {
        const element = state.panier.products[index];
        if (element.id == payload.id) {

          state.panier.products.splice(index)
          contain = true;

        }
      }
      return contain;
    },
    UPDATE_PRODUCT_PANIER(state, payload) {
      for (let index = 0; index < state.panier.products.length; index++) {
        const element = state.panier.products[index];
        if (element.id == payload.id) {

          state.panier.products[index] = payload;

        }
      }
    },
    RESET_PRODUCT_PANIER(state) {
      state.panier.products = [];
    },
    RESET_PANIER(state) {
      state.panier = new Panier();
    },
    SET_IDPRODUCT(state, payload) {
      state.idProduct = payload;
    },
    SET_IDCOLLECTION(state, payload) {
      state.idCollection = payload;
    },
    SET_SINGLE_PRODUCT(state, payload) {
      state.single_product = payload;
    },
    SET_SINGLE_COLLECTION(state, payload) {
      state.single_collection = payload;
    },
    async CONNEXION(state, payload) {
      state.token = null;
      console.log("Tag " + payload.tag)
      console.log("Pass " + payload.password)
      let user = new UserAuth();
      let url = api + "clients/login";
      axios.post(url,
        {
          "email": payload.tag,
          "password": payload.password,//password
          "company_id": 430,//state.company.id,
          "fromApi": true
        }

      ).then(
        (response) => {
          console.log(response);
          if (response.status == 200) {
            
            user.fromJson(response.data);
            state.user = user;


          } else {
            user.user.id = -404


          }
        }
      );
    },
    async INSCRIPTION(state, payload) {
      state.token = null;
      let user = new UserAuth();
      let url = api + "clients/register";
      axios.post(url,
        {
          "email": payload.email,
          "tel": payload.tel,
          "firstname": payload.firstname,
          "lastname": payload.lastname,
          "password": payload.password,
          "company_id": state.company.id,
          "fromApi": true
        }

      ).then(
        (response) => {
          console.log(response);
          
          if (response.status == 200) {
            
            user.fromJson(response.data);
            state.user = user;


          } else {
            user.user.id = -404


          }

        }
      );

    }


  },
  actions: {
  },
  modules: {
  }
})

export default store




