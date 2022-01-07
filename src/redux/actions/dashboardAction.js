import ReduxTypes from '../ReduxTypes';
import {requestStarted, requestCompleted} from '../../redux/app/appActions';
import HTTPService from '../../networkConfig/HttpServices';
import {Endpoints} from '../../networkConfig/Endpoints';

export const dashboardAction = props => (dispatch, getState) => {
  dispatch(dashboardDataPending());
  dispatch(requestStarted());

  HTTPService.get(Endpoints.Movies, null, response => {
    if (response.status === 200) {
      dispatch(dashboardDataSuccess(response.data));
      dispatch(requestCompleted());
    } else {
      dispatch(dashboardDataFailure(response.message));
      dispatch(requestCompleted());
    }
  });
};

export const dashboardDataSuccess = data => dispatch => {
  dispatch({
    type: ReduxTypes.DASHBOARD_SUCCESS,
    payload: data,
  });
};

export const dashboardDataFailure = error => dispatch => {
  dispatch({
    type: ReduxTypes.DASHBOARD_FAILED,
    payload: error,
  });
};

export const dashboardDataPending = () => dispatch => {
  dispatch({
    type: ReduxTypes.DASHBOARD_PENDING,
  });
};
