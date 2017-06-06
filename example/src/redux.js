import { combineReducers,createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';
import { formReducer } from '../../lib/index';


const rootReducer = combineReducers({
  forms: formReducer,
})

const sendUserDetails = (data) => ({
  type: 'SEND_USER_DETAILS',
  data
});

const logger = createLogger({
  // Transform Immutable objects into JSON
  stateTransformer: (state) => {
    const newState = {};

    for (const i of Object.keys(state)) { // eslint-disable-line
      if (Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }

    return newState;
  },
});

const storeWithMiddleware = compose(
  applyMiddleware(logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore);

const store = storeWithMiddleware(rootReducer, {});

export {
  store,
  sendUserDetails,
}
