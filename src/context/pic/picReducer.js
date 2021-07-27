import {
  SEARCH_PICS,
  SET_LOADING,
  CLEAR_PICS,
  GET_PIC,
  GET_REPOS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_PICS:
      return {
        ...state,
        pics: action.payload,
        loading: false
      };
    case CLEAR_PICS:
      return {
        ...state,
        pics: [],
        loading: false
      }
    default:
      return state;
  }
};