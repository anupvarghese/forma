import React, { Component } from 'react';
import { Form } from '../../lib';

class SimpleForm extends Component {
  componentDidMount() {
    this.props.updateInputValue('my-form', 'hey', '123')
    this.props.updateInputValue('my-form', 'hello', '124')
    this.props.updateInputValue('my-form', 'there', '125')
  }
  render() {
    return (
      <form >
        <input type="text" id="123" name="aaaa" value={ this.props.formData.getIn(['my-form', '123']) || '' }/>
        <input type="text" id="124" name="bbbb" value={ this.props.formData.getIn(['my-form', '124']) || ''} />
        <input type="text" id="125" name="cccc" value={ this.props.formData.getIn(['my-form', '125']) || ''}/>
      </form>
    );
  }
}

export default Form({
  name: 'my-form'
})(SimpleForm);
