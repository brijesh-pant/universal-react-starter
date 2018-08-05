/* eslint-env mocha */
/* global expect, sinon */
import React from 'react'
import { render } from 'enzyme'

import Html from '../Html'

describe('<Html />', () => {

  function setup(props = {}) {
    props = {
      markup: '',
      ...props
    }

    // Use render instead of shallow to deal with `dangerouslySetInnerHTML`
    return render(<Html { ...props } />)
  }

  it('renders', () => {
    const wrapper = setup()

    expect(wrapper).to.be.ok
  })

  it('is an html element', () => {
    const wrapper = setup()

    expect(wrapper).to.have.tagName('html')
  })

  it('does contain app markup', () => {
    const wrapper = setup({ markup: '__MARKUP__' })

    expect(wrapper.find('#app')).to.be.present()
    expect(wrapper.find('#app')).to.have.text('__MARKUP__')
  })

  it('does not escape app markup', () => {
    const wrapper = setup({ markup: '<div id="needle"></div>' })

    expect(wrapper.find('#app')).to.have.descendants('#needle')
  })
})
