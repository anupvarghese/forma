import { expect } from 'chai';
import updateInputValue from '../../../src/redux/actions/form';

describe('Form Actions', () => {
  it('should create action object for UPDATE_INPUT_VALUE', () => {
    expect(updateInputValue({ formName: 'form', value: 'abc', id: '123' })).to.deep.equal({
      type: 'UPDATE_INPUT_VALUE',
      data: {
        formName: 'form',
        value: 'abc',
        id: '123',
      },
    });
  });
});
