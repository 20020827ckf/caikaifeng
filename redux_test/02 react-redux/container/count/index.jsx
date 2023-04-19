import Count from "../../components/count";
import { connect } from "react-redux";

import { addCount, subCount, asyncAdds } from '../../redux/count_action'

function mapStateToProps(state) {
    return { count: state }
}
// function mapDispatchToProps(dispatch) {
//     return {
//         jia: (number) => { dispatch(addCount(number)) },
//         jian: (number) => { dispatch(subCount(number)) },
//         asycnJia: (data, num) => { dispatch(asyncAdds(data, num)) }
//     }
// }
// 简化版  因为上面引入了addCount 而 addCount 本身就是一个函数的值
let obj = {
    jia: addCount,
    jian: subCount,
    asycnJia: asyncAdds
}

export default connect(mapStateToProps, obj)(Count)