// Initial State
const initialState = {
  loggedIn: false,
  gate: null,
};
// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case 'LOGIN': {
      return {
        // State
        ...state,
        // Redux Store
        loggedIn: action.trueFalse,
      };
    }
    // Auth Check
    case 'AUTH_CHECK': {
      // get token from async storage
      // check token against source (fb, google, or guest)
      return {
        // State
        ...state,
        // Redux Store
        gate: action.gate,
      };
    }
    // Default
    default: {
      return state;
    }
  }
};
// Exports
export default authReducer;
