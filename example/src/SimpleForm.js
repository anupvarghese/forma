import React, { Component } from 'react';
import { Form } from '../../lib';

class SimpleForm extends Component {
  render() {
    return (
      <form>
        <input type="text" id="123" />
        <input type="text" id="124" />
        <input type="text" id="125" />
      </form>
    );
  }
}

export default Form({
  name: 'my-form'
})(SimpleForm);
