// 合并所有reducer并且返回：
import { combineReducers } from 'redux'
import { counter } from './index.redux'
import { auth } from './Auth.redux'

export default combineReducers(
  {
    counter,
    auth
  }
)