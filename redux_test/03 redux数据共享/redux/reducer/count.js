
let ininState = 0

export default function countReducer(preState = ininState, action) {
    const { type, data } = action
    // console.log(preState);
    switch (type) {
        case 'add':
            return preState + data
        case 'sub':
            return preState - data
        default:
            return preState
    }
}

