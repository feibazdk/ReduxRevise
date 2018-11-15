import React from 'react';
import { addGunFun } from './redux/index'

export default class App extends React.Component {
  render() {

    const store = this.props.store
    const num = store.getState()

    return <div>
      <h1>现在有机枪{ num } 把</h1>
      <button onClick={ () => store.dispatch(addGunFun()) }>申请武器</button>
    </div>
  }
}