import React, { Component } from 'react';

const createForm = (WrappedComponent) => {
  class Form extends Component { // eslint-disable-line
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return Form;
};

export default createForm;
