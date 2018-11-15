import React from 'react';

import { connect } from 'react-redux'

import { addGunFun, RemoveGunFun, DelayGunAsync } from './redux/index'

// @connect(
//   state => ({ num: state }),
//   { addGunFun, RemoveGunFun, DelayGunAsync }
// )

export default class App extends React.Component {
  render() {

    const num = this.props.num
    const addGunFun = this.props.addGunFun
    const RemoveGunFun = this.props.RemoveGunFun
    const DelayGunAsync = this.props.DelayGunAsync

    return <div>
      <h1>现在有机枪{ num } 把</h1>
      <button onClick={ addGunFun }>申请武器</button>
      <button onClick={ RemoveGunFun }>上缴武器</button>
      <button onClick={ DelayGunAsync }>战斗动员</button>
    </div>
  }
}

const mapStatetoProps = (state) => {
  return { num: state }
}

const actionCreators = { addGunFun, RemoveGunFun, DelayGunAsync }

App = connect(mapStatetoProps, actionCreators)(App)
