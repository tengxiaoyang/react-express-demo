import React from 'react';
import { connect } from 'react-redux'
import { login, getUserData } from './Auth.redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

// 有两个reducer, 需要合并reducer：
@connect(
  state => state.auth,
  { login, getUserData }
)

class Auth extends React.Component {

  componentDidMount() {
    this.props.getUserData()
  }

  // 没有redux时：
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data: {}
  //   }
  // }
  // componentDidMount() {
  //   axios.get('/data')
  //     .then(res => {
  //       if (res.status === 200) {
  //         this.setState({data: res.data})
  //       }
  //       // console.log(res)
  //     })
  // }

  render() {
    return (
      <div>
        {/* 没有redux时： */}
        {/* <h2>我的名字是{this.state.data.user}</h2> */}
        <h2>我的名字是{this.props.user}，年龄是{this.props.age}</h2>
        { this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null }
        <h2>请登录后查看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

export default Auth