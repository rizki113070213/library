import { createStore } from 'redux';
import myLibraryReducer from '../../reducers/books/myLibraryReducer';

const configureStore = (railsProps) => (
  createStore(myLibraryReducer, railsProps)
);

export default configureStore;
