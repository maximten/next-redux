import { Types } from '../constants'

const initialState = {
  counter: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.COUNTER.ADD: 
      return { counter: state.counter + 1 }
    case Types.COUNTER.SUB:
      return { counter: state.counter - 1 }
    default:
      return state
  }
}