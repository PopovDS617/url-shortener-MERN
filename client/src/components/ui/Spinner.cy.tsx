import React from 'react'
import Spinner from './Spinner'

describe('<Spinner />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Spinner />)
  })
})