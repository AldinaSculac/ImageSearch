import {
  SET_FAVORITE_PIC
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_FAVORITE_PIC:
      return [...state, action.payload];
    default:
      return state;
  }
};