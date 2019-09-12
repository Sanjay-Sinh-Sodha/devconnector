import { GET_ERRORS } from "../actions/types";

const initaialState = {};

export default function(state = initaialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.paylod;
    default:
      return state;
  }
}
