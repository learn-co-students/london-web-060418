class Api::V1::UsersController < ApplicationController

  def create
    user = User.create(username: params[:username], password: params[:password])
    if user.valid?
      render json: { token: issue_token({ id: user.id }) }
    else
      render json: { error: 'Cannot create user!!!!!@!!!' }
    end
  end

  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: { token: issue_token({ id: user.id }) }
    else
      render json: { error: 'Cannot find or authenticate user.' }
    end
  end

  def get_current_user
    if current_user
      render json: { username: current_user.username, id: current_user.id }
    else
      render json: { error: 'no user' }
    end
  end

  def get_pokemon
    if current_user && params[:id].to_i == current_user.id
      team = current_user.pokemons
      render json: team
    else
      render json: { error: 'not authorized!!!' }
    end
  end

  def set_pokemon
    if current_user && params[:id].to_i == current_user.id
      current_user.pokemon_ids = params[:pokemon_ids].map do |id|
        if id == 129
          130
        else
          id
        end
      end

      render json: current_user.pokemons
    else
      render json: { error: 'not authorized!!!' }
    end
  end
end
