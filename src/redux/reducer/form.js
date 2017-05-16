import { fromJS } from 'immutable';

export default (state = fromJS({}), action) => {
  switch (action.type) {
    case 'SET_FORM_NAME': {
      const formName = action.data.name;
      return state.merge({
        [formName]: {},
      });
    }
    default: {
      return state;
    }
  }
};
