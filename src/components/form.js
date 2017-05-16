import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setForm } from '../redux/actions/form';

const createForm = ({ name }) => (WrappedComponent) => {
  class Form extends Component { // eslint-disable-line
    componentDidMount() {
      this.props.setForm(name);
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
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
