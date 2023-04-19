// import React, { Component } from 'react'


// export default class Count extends Component {

//     state = { count: 1 }

//     // componentDidMount() {
//     //     console.log('aa');
//     // }

//     add = () => {
//         const { count } = this.state
//         this.setState({ count: count + 1 })
//     }

//     render() {

//         const { count } = this.state

//         return (
//             <div>
//                 <h1>总和{count}</h1>
//                 <button onClick={this.add} >点击+1</button>
//                 <button></button>
//             </div>
//         )
//     }
// }


import React from 'react'

export default function Demo() {

    const [count, setCount] = React.useState(0)

    const [name, updataName] = React.useState('jack')

    React.useEffect(() => {
        console.log('1');
    }, [count, name])

    function add() {
        setCount(count => count + 1)
    }

    function edit() {
        updataName('ab'+ Math.random()*255)
    }
    

    return (
        <div>
            <h1>总和{count},名字为{name}</h1>
            <button onClick={add}>点击+1</button>
            <button onClick={edit}>修改name</button>
        </div>
    )
}
