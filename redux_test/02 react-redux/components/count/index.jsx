
import React, { Component } from 'react'

export default class Count extends Component {


    add = () => {
        const { value } = this.selectVal
        this.props.jia(value * 1)
    }


    sub = () => {
        const { value } = this.selectVal
        this.props.jian(value * 1)

    }
    addord = () => {
        const { value } = this.selectVal
        const count = this.props.count
        if (count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }
    asyncAdd = () => {
        const { value } = this.selectVal

        this.props.asycnJia(value * 1, 2000)

    }



    render() {

        return (
            <div>
                <h2>计算价格为:{this.props.count}</h2>
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