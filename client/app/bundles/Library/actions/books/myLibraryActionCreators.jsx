import { MY_LIBRARY_FETCH_BOOKS, MY_LIBRARY_SEARCH_BOOKS } from '../../constants/books/myLibraryConstants';

export function fetchBooks() {
  return {
    type: MY_LIBRARY_FETCH_BOOKS,
    payload: this.state.books
  };
};

export function searchBooks(query){
  return{
    type: MY_LIBRARY_SEARCH_BOOKS,
    payload: query    
  };
};
