import {
  LOAD_ABOUT,
}              from 'redux/about/aboutTypes';

const defaultState = '';

export default function aboutReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_ABOUT:
      return action.payload.text;
    default:
      return state;
  }
}
