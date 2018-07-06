class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to user
    else
      flash[:errors] = ["Cannot Find User or validate password"]
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    # session.delete(:user_id)
    redirect_to login_path
  end
end
