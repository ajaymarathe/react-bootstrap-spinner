import React, { Component } from 'react'
import ReactBootstrapSpinner from 'react-bootstrap-spinner';
export default class App extends Component {
  render () {
    return (
      <div>
        <ReactBootstrapSpinner size="5" type="border" color="primary"  />
      </div>
    )
  }
}
