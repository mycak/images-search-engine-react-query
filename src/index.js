import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'
import reduxThunk from 'redux-thunk';
import 'normalize.css';

const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(reduxThunk))
)
let persistor = persistStore(store);

ReactDOM.render (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    ,
    document.querySelector('#root')
);