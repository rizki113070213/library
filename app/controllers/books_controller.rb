class BooksController < ApplicationController
  def index
    # @book_props = Book.all.index_by(&:id)
    book = Book.first
    @book_props = { name: book.title }
  end
end
