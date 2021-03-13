// 定义action：
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

// 定义reducer：
export function auth(
  state = {
    isAuth: false, 
    user: '李云龙'
  }, 
  action
) {
  // console.log(state)
  switch (action.type) {
    case LOGIN:
      return {...state, isAuth: true}
    case LOGOUT:
      return {...state, isAuth: false}
    default:
      return state
  }
} //reducer真正处理页面逻辑

// 用action creator生成action：
export function login() {
  return {type: LOGIN}
}
export function logout() {
  return {type: LOGOUT}
}