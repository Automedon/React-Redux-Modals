const TOGGLE = "modals/TOGGLE";

export const toggleCheckPoint = () => async (dispatch) => {
  return dispatch({
    type: TOGGLE,
  });
};

export default (state = { even: false }, action) => {
  switch (action.type) {
    case TOGGLE:
      return { ...state, even: !state.even };
    default:
      return state;
  }
};
