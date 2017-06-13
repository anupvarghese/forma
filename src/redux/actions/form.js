/* @flow */
import type { ActionCreator, ActionParams } from '../../types';

const updateInputValue: ActionCreator = ({ formName, value, id }: ActionParams) => ({
  type: 'UPDATE_INPUT_VALUE',
  data: { formName, value, id },
});

export default updateInputValue;
