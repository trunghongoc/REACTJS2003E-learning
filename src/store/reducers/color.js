const initialState = {
  color: 'green'
}

const colorReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_COLOR':
      const color = state.color === 'green' ? 'red' : 'green'
      return { ...state, color }
    case 'CHANGE_COLOR_TO_YELLOW':
      return { ...state, color: 'yellow' }
    default:
      return state
  }
}

export default colorReducer
