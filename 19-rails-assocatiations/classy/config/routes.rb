Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :regions
  # get "/regions/new", to: "regions#new", as: "new_region"
  # get "/regions/:id/edit", to: "regions#edit", as: "edit_region"

  resources :wines
  resources :cheeses
  #
  # get "/regions", to: 'regions#index', as: 'regions'
  # get "/regions/new", to: 'regions#new', as: 'new_region'
  # get "/regions/:id", to: 'regions#show', as: 'region'
  #
  # post "/regions", to: 'regions#create'
  #
  # get "/regions/:id/edit", to: 'regions#edit', as: 'edit_region'
  #
  # patch "/regions/:id", to: 'regions#update'
  # put "/regions/:id", to: 'regions#update'
  #
  # delete "/regions/:id", to: 'regions#destroy'
end
