import { fromJS } from 'immutable';

export default (state = fromJS({}), action) => {
  switch (action.type) {
    case 'SET_FORM_NAME': {
      const formName = action.data;
      return state.merge({
        [formName]: {},
      });
    }

    case 'UPDATE_INPUT_VALUE': {
      const { formName, value, id } = action.data;
      return state.setIn([formName, id], value);
    }

    default: {
      return state;
    }
  }
};
