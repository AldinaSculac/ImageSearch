import React, { useReducer, useEffect } from 'react';
import FavoriteContext from './favoriteContext';
import FavoriteReducer from './favoriteReducer';

import {
  GET_FAVORITE_PIC,
  SET_FAVORITE_PIC
} from '../types';


const FavoriteState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(FavoriteReducer, initialState, () => {
    const localData = localStorage.getItem('favorites');
    return localData ? JSON.parse(localData) : [];
  });

  // Save Favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state))
  }, [state])

  /*
  // Get Favorites
  const getFavorite = () => {
    return null;
  }
  */
  // Set Favorites
  const setFavorite = (id) => {
    dispatch({
      type: SET_FAVORITE_PIC,
      payload: id
    })
  }

  return (
  <FavoriteContext.Provider
    value={{
      favorites: state,
      //getFavorite,
      setFavorite
    }}
  >
    {props.children}
  </FavoriteContext.Provider>)
}

export default FavoriteState;