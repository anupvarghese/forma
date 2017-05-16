import React from 'react';
import { Form } from '../../lib';

const SimpleForm = (props) => (
  <form onSubmit={props.onSubmit}>
    <input type="text" id="123" />
  </form>
)

export default Form({
  name: 'my-form'
})(SimpleForm);
