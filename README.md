## Form helper using redux

```javascript
import React, { Component } from 'react';
import { Form } from 'formmo';

class SimpleForm extends Component {
  componentDidMount() {
    this.props.updateInputValue({ formName: 'my-form', value: 'hey', id: '123' })
    this.props.updateInputValue({ formName: 'my-form', value: 'hello', id: '124' })
    this.props.updateInputValue({ formName: 'my-form', value: 'there', id: '125' })
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
```

```javascipt
import { formReducer } from 'formmo';

const rootReducer = combineReducers({
  forms: formReducer,
})
```

All input fields will get `updateInputValue` props & it will update the current form data in store

```json
{
  forms: {
    'my-form': {
      '123': 'hey',
      '124': 'hello',
      '125': 'there'
    }
  }
}
```
