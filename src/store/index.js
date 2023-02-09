import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from '../config/ReactotronConfig';
import combineReducers from './reducers';
import rootSaga from './sagas';

let store,
  persistor,
  persistConfig,
  sagaMiddleware,
  middleware,
  persistedReducer,
  sagaMonitor,
  enhancer;

persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['authReducer'], //these reduce will not persist data
  whitelist: ['authentication'], //these reduce will persist data
};

if (!__DEV__) {
  // Middleware: Redux Saga
  sagaMiddleware = createSagaMiddleware();
  middleware = applyMiddleware(sagaMiddleware);
  persistedReducer = persistReducer(persistConfig, combineReducers);
  // Redux: Store
  store = createStore(persistedReducer, middleware);
} else {
  sagaMonitor = Reactotron.createSagaMonitor();
  sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middleware = applyMiddleware(sagaMiddleware);
  enhancer = compose(middleware, Reactotron.createEnhancer());
  persistedReducer = persistReducer(persistConfig, combineReducers);
  store = createStore(persistedReducer, enhancer);
}

sagaMiddleware.run(rootSaga);
persistor = persistStore(store);

export { store, persistor };