import { expect } from 'chai';
import { fromJS } from 'immutable';
import reducer from '../../../src/redux/reducer/form';

describe('Form Reducer', () => {
  it('should return initial state for invalid action types', () => {
    expect(reducer(undefined, {
      type: 'HI',
      data: {},
    })).to.deep.equal(fromJS({}));
  });

  it('should return correct state for valid action types', () => {
    expect(reducer(undefined, {
      type: 'UPDATE_INPUT_VALUE',
      data: {
        formName: 'abc',
        value: '123',
        id: '838820',
      },
    }).toJS()).to.deep.equal({ abc: { 838820: '123' } });
  });
});
