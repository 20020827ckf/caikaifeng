
import React, { Component } from 'react'
import store from './redux/store'
import { addCount, subCount, asyncAdds } from './redux/count_action'

export default class App extends Component {


  add = () => {
    // console.log(store);
    const { value } = this.selectVal
    store.dispatch(addCount(value * 1))
  }


  sub = () => {
    const { value } = this.selectVal
    store.dispatch(subCount(value * 1))
  }
  addord = () => {
    const { value } = this.selectVal
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(addCount(value * 1))
    }
  }
  asyncAdd = () => {
    const { value } = this.selectVal
    // const count = this.getState()
    // setTimeout(() => {
    store.dispatch(asyncAdds(value * 1, 2000))
    // }, 1000)

  }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  render() {
    return (
      <div>
        <h2>计算价格为：{store.getState()}</h2>
        <select ref={c => this.selectVal = c} >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <button onClick={this.add}>+</button> &nbsp;
        <button onClick={this.sub}>-</button>&nbsp;
        <button onClick={this.addord}>奇数加</button>&nbsp;
        <button onClick={this.asyncAdd}>异步加</button>&nbsp;
      </div>
    )
  }
}

