export const SET_AS_LOADING = 'SET_AS_LOADING';
export const SET_AS_LOADED = 'SET_AS_LOADED';
export const SET_AS_BEGIN = 'SET_AS_BEGIN';

export function setAsLoading() {
  return {
    type: SET_AS_LOADING,
  };
}

export function setAsLoaded(data) {
  return {
    type: SET_AS_LOADED,
    payload: data
  };
}

export function setAsBegin() {
  return {
    type: SET_AS_BEGIN,
  };
}
