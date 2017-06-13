/* @flow */

import type {
  Map,
} from 'immutable';

/* ---------------------- REDUX ------------------------ */
export type Action = {
  type: string,
  data: Object,
};

export type ActionCreator = (any) => Action;

export type DataState = Map<string, ? any>;

export type Reducer = (state: DataState, action: Action) => DataState;

/* ----------------------- GENERAL ----------------------- */
export type Callback = (any) => any;

/* ------------------------ SELECT OPTIONS ---------------------- */
export type Option = {
  tag: string,
  display: string,
};

export type ClassComponent<D, P, S> = Class<React$Component<D, P, S>>;
