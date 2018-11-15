import React from 'react';

export default class App extends React.Component {
  render() {

    const store = this.props.store
    const num = store.getState()
    const addGunFun = this.props.addGunFun
    const RemoveGunFun = this.props.RemoveGunFun
    const DelayGunAsync = this.props.DelayGunAsync

    return <div>
      <h1>现在有机枪{ num } 把</h1>
      <button onClick={ () => store.dispatch(addGunFun()) }>申请武器</button>
      <button onClick={ () => store.dispatch(RemoveGunFun()) }>上缴武器</button>
      <button onClick={ () => store.dispatch(DelayGunAsync()) }>战斗动员</button>
    </div>
  }
}