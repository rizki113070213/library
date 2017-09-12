import { MY_LIBRARY_FETCH_BOOKS } from '../../constants/books/myLibraryConstants';

export function fetchBooks() {
  return {
    type: MY_LIBRARY_FETCH_BOOKS,
    payload: this.state.books
  };
};
