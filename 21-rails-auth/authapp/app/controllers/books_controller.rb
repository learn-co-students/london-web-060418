class BooksController < ApplicationController
  def index
    session[:seen_book_ids] ||= []

    @books = Book.all.select do |book|
      !session[:seen_book_ids].include?(book.id)
    end
  end

  def show
    @book = Book.find(params[:id])
    session[:seen_book_ids] ||= []
    session[:seen_book_ids] << @book.id
  end
end
