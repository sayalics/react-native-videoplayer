import ReduxTypes from '../ReduxTypes';
const initialState = {
  theme: true,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReduxTypes.SWITCH_THEME:
      return {
        ...state,
        theme: !action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
