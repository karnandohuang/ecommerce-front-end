import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import ProductsPage from '@/pages/ProductsPage'
import NewProductPage from '@/pages/NewProductPage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import ProductEditPage from '@/pages/ProductEditPage'
import CategoriesPage from '@/pages/CategoriesPage'
import MembersPage from '@/pages/MembersPage'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/products',
      name: 'ProductsPage',
      component: ProductsPage
    },
    {
      path: '/products/new',
      name: 'NewProductPage',
      component: NewProductPage
    },
    {
      path: '/products/:id',
      name: 'ProductDetailPage',
      component: ProductDetailPage
    },
    {
      path: '/products/:id/edit',
      name: 'ProductEditPage',
      component: ProductEditPage
    },
    {
      path: '/categories',
      name: 'CategoriesPage',
      component: CategoriesPage
    },
    {
      path: '/categories',
      name: 'MembersPage',
      component: MembersPage
    }
  ],
  mode: 'history'
})
