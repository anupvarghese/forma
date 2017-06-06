import { fromJS } from 'immutable';

export default (state = fromJS({}), action) => {
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
