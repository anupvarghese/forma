import { combineReducers,createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { fromJS, Iterable } from 'immutable';
import { formReducer } from '../../lib/index';

const initialState = {
  userDetails: {
    loading: false,
    data: {},
  }
}
const userReducer = (state = fromJS(initialState.userDetails), action) => {
  switch (action.type) {
    case 'SEND_USER_DETAILS': {
      return state.mergeIn({
        loading: true,
      })
    }
    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  userDetails: userReducer,
  form: formReducer,
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
