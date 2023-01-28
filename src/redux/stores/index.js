import { createStore, applyMiddleware } from 'redux';
import { persistStore , persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// reducers
import reducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
  //  blacklist : ["product",],
//   whitelist: ['auth', 'reportNoRefresh'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistore = persistStore(store);