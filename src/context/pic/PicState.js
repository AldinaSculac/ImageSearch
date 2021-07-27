import React, {useReducer} from 'react';
import unsplashApi from '../../api/unsplash';
import PicContext from './picContext';
import PicReducer from './picReducer';

import {
  SEARCH_PICS,
  GET_PIC,
  GET_REPOS,
  CLEAR_PICS,
  SET_LOADING,
} from '../types';


const PicState = props => {
  const initialState = {
    pics:[],
    pic:{},
    repos:[],
    loading: false
  }

  const [state, dispatch] = useReducer(PicReducer, initialState);

  // Search Pics
  const searchPics = async term => {
    setLoading();

    const response = await unsplashApi.get(`/search/photos`,{
      params: {
        query: term
      }
    });

    dispatch({
      type: SEARCH_PICS,
      payload: response.data.results
    });
  };


  // Clear Pics
  const clearPics = () => dispatch({type: CLEAR_PICS})

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
  <PicContext.Provider
    value={{
      pics: state.pics,
      pic: state.pic,
      repos: state.repos,
      loading: state.loading,
      searchPics,
      clearPics,
      setLoading
    }}
  >
    {props.children}
  </PicContext.Provider>)
}

export default PicState;