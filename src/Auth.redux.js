import axios from 'axios'

// 定义action：
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA ='USER_DATA'
const initState = {
  isAuth: false, 
  user: '李云龙',
  age: 20
}

// 定义reducer：
export function auth(state = initState, action) {
  console.log(state, action)
  switch (action.type) {
    case LOGIN:
      return {...state, isAuth: true}
    case LOGOUT:
      return {...state, isAuth: false}
    case USER_DATA:
      // return {...state, user: action.payload.user, age: action.payload.age}
      return {...state, ...action.payload}
    default:
      return state
  }
} //reducer真正处理页面逻辑

// 用action creator生成action：

// 获取异步数据：

export function getUserData() {
  // 要返回一个异步对象：
  // 用dispatch来通知数据修改：
  return dispatch => {
    axios.get('/data')
      .then(res => {
        if (res.status === 200) {
          dispatch(userData(res.data))
        }
        // console.log(res)
      })
  }
}

export function userData(data) {
  // 要返回一个异步对象：
  // 用dispatch来通知数据修改：
  return {type: USER_DATA, payload: data}
}

export function login() {
  return {type: LOGIN}
}
export function logout() {
  return {type: LOGOUT}
}