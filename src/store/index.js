import Vue from 'vue'
import Vuex from 'vuex'
import usersApi from '@/api/users'
import productsApi from '@/api/products'

Vue.use(Vuex)

const state = {
  userData: {},
  products: {},
  productDetail : {}
}

const mutations = { //setter
  setUserData (state, value) {
    state.userData = value
  },
  setProducts (state, value) {
    state.products = value
  },
  setProductDetail(state, value) {
    state.productDetail = value
  }
}

const getters = { //getter
  userData (state) {
    return state.userData
  },
  products: state => state.products,
  productDetail: state => state.productDetail
}

const actions = { //action
  getUserData({commit}) {
    usersApi.getUser()
      .then((resp) => {
        commit('setUserData', resp.data)
      });
  },
  getProducts({commit}) {
    productsApi.getProducts()
      .then((resp) =>
      commit('setProducts', resp.data))
  },
  getProductDetail({commit}, {id}) {
    productsApi.getProductById(id)
      .then((resp) =>
      commit('setProductDetail', resp.data))
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
