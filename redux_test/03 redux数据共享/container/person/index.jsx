import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addPresons } from '../../redux/action/person'

class Person extends Component {

    add = () => {
        const name = this.name.value
        const age = this.age.value
        let obj = { id: nanoid(), name, age }
        this.props.addPerson(obj)
        this.name.value = ''
        this.age.value = ''
    }

    render() {
        return (
            <div>
                <h2>我是Person组件 上面的求和为{this.props.count}</h2>
                <input type="text" placeholder='请输入姓名' ref={c => this.name = c} />
                <input type="text" placeholder='请输入年龄' ref={c => this.age = c} />
                <button onClick={this.add}>添加</button>

                <ul>
                    {/* <li>名字1--年龄1</li>
                    <li>名字2--年龄2</li>
                    <li>名字3--年龄3</li> */}
                    {
                        this.props.preson.map(item => {
                            return <li key={item.id} >{item.name}--{item.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    preson: state.person,
    count: state.count
})

let obj = {
    addPerson: addPresons
}

export default connect(mapStateToProps, obj)(Person)
