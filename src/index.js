import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
// 导入 createStore 属性
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

// 导入 reducer，一定要记住， reducer 一定是纯函数
import { counter, addGunFun, RemoveGunFun, DelayGunAsync } from './redux/index'

// 通过 reducer ，使用 createStore 新建 store
const store = createStore(counter, compose(
  applyMiddleware(ReduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

function render() {
  ReactDom.render(<App store={store} addGunFun={addGunFun} RemoveGunFun={RemoveGunFun} DelayGunAsync={DelayGunAsync} />, document.getElementById("root"))
}

render()

store.subscribe(render)