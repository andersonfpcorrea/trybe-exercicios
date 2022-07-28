import { FETCH_DATA, GET_DATA, ERROR } from "../actions/actions";

const INITIAL_STATE = {
  char: '',
  loading: false,
  error: '',
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
        loaded: false,
      }
    case GET_DATA: 
      return {
        ...state,
        char: action.payload,
        loading: false,
        loaded: true,
      }
    case ERROR: 
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;
