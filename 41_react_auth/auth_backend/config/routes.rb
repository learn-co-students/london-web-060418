Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :pokemons, only: [:index]
      resources :users, only: [:create]
      post "/login", to: 'users#login'
      get "/current_user", to: 'users#get_current_user'
      get "/users/:id/pokemon", to: 'users#get_pokemon'
      post "/users/:id/pokemon", to: 'users#set_pokemon'
    end
  end
end
