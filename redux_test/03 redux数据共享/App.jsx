import React, { Component } from 'react'

import Count from './container/count'  // 引入容器
// import Test from './container/test'
import Person from './container/person'


export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        {/* <Test></Test> */}
        <hr />
        <Person />
      </div>
    )
  }
}

