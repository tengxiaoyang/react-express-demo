import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'

@connect(
  // 把state什么属性放到props里：
  state => ({num: state.counter}),
  // 把state中的什么方法放到props里，会自动dispatch：
  { addGun, removeGun, addGunAsync },
)
class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    // 通过属性获取store以及addGun、removeGun这两个操作函数，再通过store获取初始状态和dispatch方法：
    return (
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上交武器</button>
        <button onClick={this.props.addGunAsync}>拖两天再给</button>
      </div>
    )
  }
}

export default App