import React, { Component } from 'react'
import Datafecth from './Datafecth'
import Datatransfer from './Datatransfer'
import LoginFunction from './LoginFunction'
import NarBar from './NarBar'

export default class TheApp extends Component {
  render() {
    return (
      <div>
        <NarBar />
        <Datatransfer />
        <Datafecth />
        {/* <LoginFunction /> */}
      </div>
    )
  }
}
