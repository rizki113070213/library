class BooksController < ApplicationController
  def index
    # @book_props = { books: Book.all.index_by(&:id) }
    @book_props = Book.order('updated_at ASC')
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def search
    query = params[:query]
    books = Book.where('title LIKE ? OR author LIKE? OR
                              genre LIKE ? OR publisher LIKE ?',
                              "%#{query}%", "%#{query}%", "%#{query}%",
                              "%#{query}%").index_by(&:id)
    render json: books
  end

  private
    def book_params
      params.require(:book).permit(:title, :author, :genre, :publisher, :synopsis)
    end
end
