import {createLocalVue, mount} from '@vue/test-utils'
import App from '@/App'
import store from '@/store'
import i18n from '@/i18n'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const routes = []

const router = new VueRouter({
  routes
})

function getStore(){
  const actions ={
    getUserData: jest.fn()
  }
}

describe('App.vue', () => {
  it('on created', () => {
    expect(1).toEqual(1)
  })

  it('should mount well', function () {
    const wrapper = mount(App, {
      store,
      i18n,
      components: {
        RouterLink: {
          name: 'Route'
        }
      }
    })
  })
})
