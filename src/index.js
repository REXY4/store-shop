import React from 'react';
import ReactDOM from 'react-dom/client';
//css
import "./styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistore, store} from "./redux/stores";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistore}>
     <App/>
    </PersistGate>
  </Provider>
  </React.StrictMode>
);
