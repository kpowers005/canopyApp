import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import sessionReducer  from './session';
import treehouseReducer  from './treehouses';
import reviewReducer  from './reviews';
import reservationReducer  from './reservations';
import thunk from 'redux-thunk';
import userReducer from './user';
import mapReducer from './map';


const rootReducer = combineReducers({
  session: sessionReducer,
  trees: treehouseReducer,
  reviews: reviewReducer,
  reservations: reservationReducer,
  user: userReducer,
  map: mapReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
};


const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
