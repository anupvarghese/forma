/* @flow */
import type { ActionCreator } from '../../types';

const updateInputValue: ActionCreator = ({ formName, value, id }) => ({
  type: 'UPDATE_INPUT_VALUE',
  data: { formName, value, id },
});

export default updateInputValue;
