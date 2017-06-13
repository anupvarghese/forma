/* @flow */
import React from 'react';
import {
  connect,
} from 'react-redux';
import updateInputValue from '../redux/actions/form';
import type {
  ClassComponent,
  Callback,
  ActionParams,
  formName,
  Event,
  DataState,
} from '../types';

type connectedProps = {
  updateInputValue: (ActionParams) => any,
};

const createForm = ({
    name,
  }: formName) => (WrappedComponent: ClassComponent<void, connectedProps, void>) => {
    class Form extends WrappedComponent { // eslint-disable-line
      handleOnChange = (id: string) => (e: Event) => {
        const value = e.target.value;
        this.props.updateInputValue({
          formName: name,
          value,
          id,
        });
      }

      handleOnBlur = (id: string) => (e: Event) => {
        const value = e.target.value;
        this.props.updateInputValue({
          formName: name,
          value,
          id,
        });
      }

      attachProps = (child: Object) => {
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

      mapRecursive = (children: Object, callback: Callback) => (
        React.Children.map(
          children,
          child => (
            child.props.children ?
            this.mapRecursive(child.props.children, callback) :
            callback(child)
          ),
        )
      );

      render(): React.Element<any> {
        const elementsTree = super.render();
        if (!elementsTree) {
          return React.createElement('div', {
            name,
          });
        }
        const result = this.mapRecursive(elementsTree, this.attachProps);
        return React.createElement('forma', {
          name,
        }, ...result);
      }
    }

    const dispatchToProps: Object = {
      updateInputValue,
    };

    const stateToProps: Callback = (state: DataState) => ({
      formData: state.forms,
    });

    return connect(stateToProps, dispatchToProps)(Form);
  };

export default createForm;
