// 定义action：
// 定义常量：
const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'

// 定义reducer：
export function counter(state = 10, action) {
  // console.log(state)
  switch (action.type) {
    case ADD_GUN:
      return state + 1
    case REMOVE_GUN:
      return state - 1
    default:
      return state
  }
}

// 定义action：
// 把对象变成函数返回值：
// action creator，专门创建action：
export function addGun() {
  return {type: ADD_GUN}
}
export function removeGun() {
  return {type: REMOVE_GUN}
}

// 只要提交action，reducer就会执行，reducer会获取现在的状态和action，action就是{type: ADD_GUN}或{type: REMOVE_GUN}，然后判断type，处理完返回新的状态，当状态变化时，用subscribe订阅drender函数会重新执行，重新渲染整个页面

// 用action creator生成action：
export function addGunAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGun())
    }, 2000)
  }
}