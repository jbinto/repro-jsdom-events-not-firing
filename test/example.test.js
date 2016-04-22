import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { expect } from 'chai'

import Example from '../src/example'

describe('test', () => {
  it('test', () => {
    const wrapper = mount(<Example />)

    const event = new Event('click')
    document.dispatchEvent(event)

    // at this point, I expect the component to re-render,
    // with updated state.

    expect(wrapper.text()).to.match(/true/)
  })
})
