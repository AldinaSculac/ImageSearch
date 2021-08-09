import {
  SET_FAVORITE_PIC
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_FAVORITE_PIC:
      const isInArray = state.find(fav => fav === action.payload)
      if(isInArray) {
        return state.filter(fav => fav !== action.payload)
      } else {
        return [...state, action.payload]
      }
    default:
      return state;
  }
};