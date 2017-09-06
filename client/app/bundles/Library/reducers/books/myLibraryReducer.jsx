import { combineReducers } from 'redux';
import { MY_LIBRARY_NAME_UPDATE } from '../../constants/books/myLibraryConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case MY_LIBRARY_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const myLibraryReducer = combineReducers({ name });

export default myLibraryReducer;
