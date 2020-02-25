import {
    SET_AS_LOADING,
    SET_AS_LOADED,
    SET_AS_BEGIN
  } from '../actions/documentTestActions';
  
  const initialState = {
    dataState: 'begin',
    data: []
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_AS_LOADING:
        return { ...state, dataState: 'loading' };
      case SET_AS_LOADED:
        return { ...state, dataState: 'loaded',  data: action.payload};
      case SET_AS_BEGIN:
        return { ...state, dataState: 'begin' };
      default:
        return state;
    }
  }
