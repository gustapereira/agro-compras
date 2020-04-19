// Action Types
export const Types = {
  LOGIN: 'login'
};

// Reducer
const INITIAL_STATE = {
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return { ...state };
    default:
      return state;
  }
};

export const login = () => async (dispatch) => {
  //  Login functon
};
