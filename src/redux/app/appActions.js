import ReduxTypes from '../ReduxTypes';

export const isConnectionStateChanged = netState => dispatch => {
  dispatch(updateNetSate(netState));
};

const updateNetSate = data => dispatch => {
  dispatch({
    type: ReduxTypes.NET_STATE_CHANGED,
    payload: data,
  });
};

export const requestStarted = () => dispatch => {
  dispatch({
    type: ReduxTypes.REQUEST_STARTED,
  });
};

export const requestCompleted = () => dispatch => {
  dispatch({
    type: ReduxTypes.REQUEST_COMPLETED,
  });
};
