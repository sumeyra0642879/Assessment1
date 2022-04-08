import React, { Component } from 'react'
import Slider from './Slider'
import FormExample from './Form'

export default class HomePage extends Component {
  render() {
    return (
        <div>
          <Slider />
          <FormExample />
        </div>
    )
  }
}
