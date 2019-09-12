const initaialState = {
  isAuthinticated: false,
  user: {}
};

export default function(state = initaialState, action) {
  switch (action.type) {
    // case SET_CURRENT_USER:
    //   break;

    default:
      return state;
      break;
  }
}
