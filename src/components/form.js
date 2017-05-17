import React from 'react';
import { connect } from 'react-redux';
import { setForm } from '../redux/actions/form';

const createForm = ({ name }) => (WrappedComponent) => {
  class Form extends WrappedComponent { // eslint-disable-line
    componentDidMount() {
      this.props.setForm(name);
    }

    handleOnChange = () => {
      console.log('*****');
    }

    attachProps = (child) => {
      const newProps = { name, onChange: this.handleOnChange };
      if (child.type === 'input') {
        return React.cloneElement(
          child,
          Object.assign({}, child.props, newProps),
        );
      }
      return React.cloneElement(child, child.props);
    }

    mapRecursive = (children, callback) => (
      React.Children.map(
        children,
        child => (
          child.props.children
            ? this.mapRecursive(child.props.children, callback)
            : callback(child)
        ),
      )
    );

    render() {
      const elementsTree = super.render();
      const result = this.mapRecursive(elementsTree, this.attachProps);
      return React.createElement('form', { name }, ...result);
    }
  }

  const dispatchToProps = {
    setForm,
  };

  const stateToProps = state => ({
    formData: state[name] ? state[name].get(name) : '',
  });

  return connect(stateToProps, dispatchToProps)(Form);
};

export default createForm;
