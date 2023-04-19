// 为count组件生成action 对象
// 箭头函数返回对象的简写
import { ADD, SUB } from '../constant'

export const addCount = data => ({ type: ADD, data })
export const subCount = data => ({ type: SUB, data })

export const asyncAdds = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addCount(data))
        }, time)
    }
}