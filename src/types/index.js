/* @flow */

import type {
  Map,
} from 'immutable';

/* ---------------------- REDUX ------------------------ */
export type ActionParams = {
  formName: string,
  value: string,
  id: string,
}

export type Action = {
  type: string,
  data: ActionParams,
};

export type ActionCreator = (any) => Action;

export type DataState = Map<string, ? any>;

export type Reducer = (state: DataState, action: Action) => DataState;

/* ----------------------- GENERAL ----------------------- */
export type Callback = (any) => any;


export type ClassComponent<D, P, S> = Class<React$Component<D, P, S>>;

export type formName = {
  name: string
}

export type Event = {
  target: {
    value: string,
  }
}
