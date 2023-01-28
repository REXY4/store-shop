const initialState = {
    users : null,
    isLogin : false,
  };
  
  const authReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'AUTH_SUCCESS':
        sessionStorage.setItem("token",payload.token)
        return {
          ...state,
          isLogin : true,
          users : payload.user,
          token : payload.token
        };
        case 'LOGOUT':
            sessionStorage.removeItem("token")
            return {
              ...state,
              isLogin : false,
              users : null,
              token : null
            };  
      default:
        return state;
    }
  };
  
  export default authReducers;
  