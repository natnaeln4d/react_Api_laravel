import React, { Component } from 'react'
import Axios from './Axios'
import Datafecth from './Datafecth'
import Datatransfer from './Datatransfer'
import FetchData from './FetchData'
import LoginFunction from './LoginFunction'
import NarBar from './NarBar'

export default class TheApp extends Component {
  render() {
    return (
      <div>
        <NarBar />
        <Datatransfer />
        {/* <Datafecth /> */}
        <FetchData />
        {/* <LoginFunction /> */}
      </div>
    )
  }
}
