const initialState = {
    product : [],
    products : null
  };
  
  const productReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'ADD_PRODUCT':
          return {
            ...state,
            product : [...state.product, payload]
          };
          case 'ALL_PRODUCT':
            return {
              ...state,
              products : [...state.product, payload]
            };    
      case 'DELETE':
      return {
              ...state,
              product : state.product.filter((fil)=>fil.id !== payload)
          };
      case 'EDIT_PRODUCT':
          return {
              ...state,
                product : state.product.filter(item => {
                  return item.id !== payload.id; //delete matched product
              }).concat(payload)
          };
      default:
        return state;
    }
  };
  
  export default productReducers;
  