import ReduxTypes from '../ReduxTypes';
import {createReducer} from '../index';

const initialState = {
  loading: false,
  loadingMessage: '',
  isConnected: true,
};

export default createReducer(initialState, {
  [ReduxTypes.REQUEST_STARTED]: (state, payload) =>
    Object.assign({}, state, {
      loading: true,
      loadingMessage: payload,
    }),

  [ReduxTypes.REQUEST_COMPLETED]: state =>
    Object.assign({}, state, {
      loading: false,
      loadingMessage: '',
    }),

  [ReduxTypes.REQUEST_FAIL]: state =>
    Object.assign({}, state, {
      loading: false,
      loadingMessage: '',
    }),

  [ReduxTypes.NET_STATE_CHANGED]: (state, payload) =>
    Object.assign({}, state, {
      isConnected: payload,
    }),
});
