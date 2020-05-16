// Initial State
const initialState = {
  isLoggedIn: false,
  username: undefined,
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
        isLoggedIn: action.trueFalse,
      };
    }
    // Sign Up
    case 'SIGN_UP': {
      // TODO Call API To Sign Up
      // access  action.username & action.password
      console.log('SIGN_UP called.\nusername:', action.username, '\npassword:', action.password);
      // const authToken = 'under_development_1_2_3_A_B_C-sign-up';

      // await AsyncStorage.setItem('@client-app:authToken', authToken);
      return {
        // State
        ...state,
        // Redux Store * DO NOT STORE PASSWORD
        username: action.username,
        isLoggedIn: true,
      };
    }
    // LoginNew
    case 'LOGIN_NEW': {
      // TODO Call API To Login
      // access  action.username & action.password
      console.log('LOGIN_NEW called.\nusername:', action.username, '\npassword:', action.password);
      // const authToken = 'under_development_1_2_3_A_B_C-login';
      return {
        // State
        ...state,
        // Redux Store * DO NOT STORE PASSWORD
        username: action.username,
      };
    }
    // Auth Check
    case 'AUTH_CHECK': {
      // TODO get token from async storage
      // send token to API to ensure validity
      // const authToken = 'under_development_1_2_3_A_B_C-auth-check';
      return {
        // State
        ...state,
        // Redux Store * DO NOT STORE PASSWORD
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
