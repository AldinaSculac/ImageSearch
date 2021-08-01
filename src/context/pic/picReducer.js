import {
  SEARCH_PICS,
  SET_LOADING,
  CLEAR_PICS,
  //GET_PIC,
  //GET_REPOS,
  CLEAR_NO_PICS,
  SET_NO_PICS
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
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_NO_PICS:
      return {
        ...state,
        alertMsg: action.payload
      };
    case CLEAR_NO_PICS:
      return {
        ...state,
        alertMsg: ''
      };;
    default:
      return state;
  }
};