class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create!(user_params)
    if @user.valid?
      session[:user_id] = @user.id
      redirect_to @user
    end
  end

  def edit
    authorized_for(params[:id])
    @user = User.find(params[:id])
    @books = Book.where(user_id: nil).or(Book.where(user_id: @user.id))
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    redirect_to @user
  end


  private
  def user_params
    params.require(:user).permit(:username, :password, book_ids: [])
  end
end
