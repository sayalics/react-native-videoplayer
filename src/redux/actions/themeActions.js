import ReduxTypes from '../ReduxTypes';

export const switchTheme = currentTheme => {
  return dispatch => {
    dispatch({
      type: ReduxTypes.SWITCH_THEME,
      payload: currentTheme,
    });
  };
};
