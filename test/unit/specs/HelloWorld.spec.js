import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import {shallowMount} from '@vue/test-utils'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(HelloWorld)
    // expect(wrapper.vm.msg).toEqual('Welcome to My Online Store')
  })
})
