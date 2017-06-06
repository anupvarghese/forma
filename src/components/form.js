import React from 'react';
import { connect } from 'react-redux';
import { setForm, updateInputValue } from '../redux/actions/form';

const createForm = ({ name }) => (WrappedComponent) => {
  class Form extends WrappedComponent { // eslint-disable-line

    handleOnChange = id => (e) => {
      const value = e.target.value;
      this.props.updateInputValue(name, value, id);
    }

    handleOnBlur = id => (e) => {
      const value = e.target.value;
      this.props.updateInputValue(name, value, id);
    }

    attachProps = (child) => {
      if (child.type === 'input') {
        const newProps = {
          onChange: this.handleOnChange(child.props.id),
          onBlur: this.handleOnBlur(child.props.id),
        };

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
      return React.createElement('forma', { name }, ...result);
    }
  }

  const dispatchToProps = {
    setForm,
    updateInputValue,
  };

  const stateToProps = state => ({
    formData: state.forms,
  });

  return connect(stateToProps, dispatchToProps)(Form);
};

export default createForm;
