Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'dates_assignments/index'
      post 'dates_assignments/create'
      post 'dates_assignments/create_day', to: 'dates_assignments#create_day'
      get '/show/:id', to: 'dates_assignments#show'
      delete '/destroy/:id', to: 'dates_assignments#destroy'

    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
