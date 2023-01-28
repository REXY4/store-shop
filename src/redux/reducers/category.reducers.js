const initialState = {
    category : null
  };
  
  const categoryReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'ALL_CATEGORY':
        return {
          ...state,
          category : payload
        };
      default:
        return state;
    }
  };
  
  export default categoryReducers;
  