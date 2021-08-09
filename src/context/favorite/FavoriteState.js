import React, {useReducer} from 'react';
import FavoriteContext from './favoriteContext';
import FavoriteReducer from './favoriteReducer';

import {
  GET_FAVORITE_PIC,
  SET_FAVORITE_PIC
} from '../types';


const FavoriteState = props => {
  const initialState = {
    favorites:[],
  }

  const [state, dispatch] = useReducer(FavoriteReducer, initialState);

  /*
  // Get Favorites
  const getFavorite = () => {
    return null;
  }

  // Set Favorites
  const setFavorite = () => {
    return null;
  }

  */

  return (
  <FavoriteContext.Provider
    value={{
      favorites: state.favorites,
      //getFavorite,
      //setFavorite
    }}
  >
    {props.children}
  </FavoriteContext.Provider>)
}

export default FavoriteState;