const ADD_GUN = '机关枪'
const REMOVE_GUN = '大炮'


export function counter(state = 0, action) {
  switch (action.type) {
    case ADD_GUN:
      return state + 1;
    case REMOVE_GUN:
      return state - 1;
    default:
      return 10
  }
}

export function addGunFun() {
  return { type: ADD_GUN }
}

export function RemoveGunFun() {
  return { type: REMOVE_GUN }
}