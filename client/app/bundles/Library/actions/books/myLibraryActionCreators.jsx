import { MY_LIBRARY_FETCH_BOOKS, MY_LIBRARY_SEARCH_BOOKS } from '../../constants/books/myLibraryConstants';

export function fetchBooks() {
  const books = this.state.books
  return {
    type: MY_LIBRARY_FETCH_BOOKS,
    payload: books
  };
};

export function searchBooks(query){
  return{
    type: MY_LIBRARY_SEARCH_BOOKS,
    payload: query
  };
};
