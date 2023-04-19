import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCount } from '../../redux/action/count'

class Test extends Component {

    add = () => {
        this.props.jia(1)
    }

    render() {
        return (
            <div>
                <h2>当前值{this.props.count}</h2>
                <button onClick={this.add}>+1</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({ count: state })

let obj = {
    jia: addCount
}

export default connect(mapStateToProps, obj)(Test)

