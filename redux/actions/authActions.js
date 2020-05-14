// Login
export const login = (trueFalse) => ({
  type: 'LOGIN',
  trueFalse,
});

// Check for existing token
export const authCheck = () => ({
  type: 'AUTH_CHECK',
});

// Validate existing token
export const authValidate = (gate) => ({
  type: 'AUTH_VALIDATE',
  token,
  gate, // gate of entry: facebook, google, or guest
});

// Signup with Facebook
export const signupFacebook = () => ({
  type: 'SIGNUP_FACEBOOK',
});

// Signup with Google
export const signupGoogle = () => ({
  type: 'SIGNUP_GOOGLE',
});

// Signin as guest
export const signinGuest = () => ({
  type: 'SIGNIN_GUEST',
});

// Signin with Facebook
export const signinFacebook = () => ({
  type: 'SIGNIN_FACEBOOK',
});

// Signin with Google
export const signinGoogle = () => ({
  type: 'SIGNIN_GOOGLE',
});
