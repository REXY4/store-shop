const initialState = {
    cart : null
  };
  
  const cartReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'ADD_CART':
        return {
          ...state,
          cart : {
            product : payload.product,
            cart : payload.cart
          }
        };
        case 'DELETE_CART':
        return {
          ...state,
          cart : {
            product : payload.product,
            cart : payload.cart
          }
        };
      default:
        return state;
    }
  };
  
  export default cartReducers;
  