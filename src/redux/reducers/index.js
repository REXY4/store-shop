import { combineReducers } from 'redux';
import authReducers from './auth.reducers';
import cartReducers from './cart.reducer';
import categoryReducers from './category.reducers';
import productReducers from './product.reducer';

const reducers = combineReducers({
    product : productReducers,
    category : categoryReducers,
    cart : cartReducers,
    auth : authReducers
});

export default reducers;