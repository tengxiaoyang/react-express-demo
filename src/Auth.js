import React from 'react';
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import { Redirect } from 'react-router-dom'

// 有两个reducer, 需要合并reducer：
@connect(
  state => state.auth,
  { login }
)

class Auth extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        { this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null }
        <h2>请登录后查看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

export default Auth