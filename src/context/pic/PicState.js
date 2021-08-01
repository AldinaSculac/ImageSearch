import React, {useReducer} from 'react';
import unsplashApi from '../../api/unsplash';
import PicContext from './picContext';
import PicReducer from './picReducer';

import {
  SEARCH_PICS,
  //GET_PIC,
  //GET_REPOS,
  CLEAR_PICS,
  SET_LOADING,
  CLEAR_NO_PICS,
  SET_NO_PICS
} from '../types';


const PicState = props => {
  const initialState = {
    pics:[],
    pic:{},
    repos:[],
    loading: false,
    alertMsg:''
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

    
    if(response.data.results.length === 0) {
      setNoPics('No images found.');
    }
    

    /*
    if(response.data.results.length === 0) {
      setNoPics('No images found');
      dispatch({
        type: SEARCH_PICS,
        payload: response.data.results
      });
    } else {
      dispatch({
        type: SEARCH_PICS,
        payload: response.data.results
      });
    }
    */
  };

  // Set Alert
  const setNoPics = (msg) => {
    dispatch({
      type: SET_NO_PICS,
      payload: msg
    })

    setTimeout(() => dispatch({type: CLEAR_NO_PICS}), 5000)
  }

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
      alertMsg: state.alertMsg,
      searchPics,
      clearPics,
      setLoading,
      setNoPics
    }}
  >
    {props.children}
  </PicContext.Provider>)
}

export default PicState;