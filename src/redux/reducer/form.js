/* @flow */
import { fromJS } from 'immutable';
import type { Action, DataState, Reducer } from '../../types';

const reducer: Reducer = (state: DataState = fromJS({}), action: Action) => {
  switch (action.type) {
    case 'UPDATE_INPUT_VALUE': {
      const { formName, value, id } = action.data;
      return state.setIn([formName, id], value);
    }

    default: {
      return state;
    }
  }
};

export default reducer;
