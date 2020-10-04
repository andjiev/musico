import { combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { reducers } from './root-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

function configureMusicoStore(history: History) {
  const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

  const store = configureStore({
    reducer: getRootReducer(history),
    middleware: middleware
  });
  return store;
}

function getRootReducer(history: History) {
  return combineReducers({
    ...reducers,
    router: connectRouter(history)
  });
}

export default configureMusicoStore;
