class BooksController < ApplicationController
  def index
    @book_props = { books: Book.all.index_by(&:id) }
    # @book_props = { books: Book.all.as_json }
    # book = Book.first
    # @book_props = { books: book.title }
  end
end
