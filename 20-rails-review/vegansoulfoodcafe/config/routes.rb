Rails.application.routes.draw do
  get '/brands', to: 'brands#index' #, as: 'brands'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  # resources :items, only [:index, :show, :new]
  get "/items", to: 'items#index'
  get "/items/new", to: 'items#new', as: 'new_item'
  get "/items/:id", to: 'items#show', as: 'item'

  post "/items", to: 'items#create'

  delete "/items/:id", to: 'items#destroy'
end
