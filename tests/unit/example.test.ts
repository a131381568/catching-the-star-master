import { test, assert, describe, it, expect } from 'vitest'
import { mount, VueWrapper } from "@vue/test-utils";
// import Header from '../../src/components/Header.vue'

describe('example test', () => {
  test('assert', () => {
    // assert.equal(1, 1)
    expect(1).toEqual(1)
  })
})

// before(() => {
//   setTimeout(() => {
//     console.log('waiting for CI to catch up')
//   }, 1000)
// })
// describe('Header', () => {
//   it('test Header', () => {
//     const wrapper = mount(Header);
//     console.log(wrapper.vm)
//     expect(wrapper.vm.modal).toBeFalsy();
//   })
// })