import { createStore } from 'redux';

// 新建 store，通过 reducer 建立
// 这个函数就是 reducer0
function counter(state = 0, action) {
  switch (action.type) {
    case '机关枪':
      return state + 1;
    case '大炮':
      return state - 1;
    default:
      return 10
  }
}

// 通过 reducer ，使用 createStore 新建 store
const store = createStore(counter)

// 获取最新的 state
// const init = store.getState();
// 最新的 atate
// console.log(init)

function listener() {
  const current = store.getState();
  console.log(current)
}

store.subscribe(listener)

store.dispatch({ type: '机关枪' })
store.dispatch({ type: '机关枪' })
store.dispatch({ type: '减关枪' })
