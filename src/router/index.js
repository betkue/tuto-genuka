import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/connect',
    name: 'connect',
    component: () => import('../views/ConnectView.vue')
  },
  {
    path: '/deconnect',
    name: 'deconnect',
    component: () => import('../views/DeconnectView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/collections',
    name: 'collections',
    component: () => import('../views/CollectionsView.vue')
  },
  {
    path: '/products/:product_slug',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/collections/:collection_slug',
    name: 'collection',
    component: () => import('../views/CollectionView.vue')
  },
  {
    path: '/panier',
    name: 'panier',
    component: () => import('../views/PanierView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
