import React, { Component } from 'react';
import { Form } from '../../lib';

class SimpleForm extends Component {

  render() {
    return (
      <form >
        <input type="text" id="123" name="aaaa" />
        <input type="text" id="124" name="bbbb" />
        <input type="text" id="125" name="cccc" />
      </form>
    );
  }
}

export default Form({
  name: 'my-form'
})(SimpleForm);
