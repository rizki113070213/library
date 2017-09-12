import { combineReducers } from 'redux';
import { MY_LIBRARY_FETCH_BOOKS } from '../../constants/books/myLibraryConstants';

const books = (state = [], action) => {
  switch (action.type) {
    case MY_LIBRARY_FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

const myLibraryReducer = combineReducers({ books });

export default myLibraryReducer;
