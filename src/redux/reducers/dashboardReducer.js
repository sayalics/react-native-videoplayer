import ReduxTypes from '../ReduxTypes';

const initialState = {
  dashboardData: [],
  dashboardError: null,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReduxTypes.DASHBOARD_SUCCESS:
      console.log('getFilesReducer payload: DASHBOARD_SUCCESS');
      return {
        ...state,
        dashboardData: action.payload,
        dashboardError: null,
        // isLoading: false
      };
    case ReduxTypes.DASHBOARD_FAILED:
      console.log('getFilesReducer payload: DASHBOARD_FAILED');
      return {
        ...state,
        dashboardData: [],
        dashboardError: action.payload,
      };
    case ReduxTypes.DASHBOARD_PENDING:
      console.log('getFilesReducer payload: DASHBOARD_PENDING');
      return {
        ...state,
        dashboardData: [],
        dashboardError: null,
      };
    case ReduxTypes.RESET_STORE:
      console.log('getFilesReducer payload: RESET_STORE');
      return {
        ...state,
        dashboardData: [],
        dashboardError: null,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
