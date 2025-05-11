const initialState = {
  value: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case "INCREMENT":
      return {
        value: state.value + 1
      };
    case "DECREMENT":
      return {
        value: state.value - 1 
      };
    case "RESET":
      return {
        value: 0
      };
    default: 
    return state
  }
}

export default counterReducer