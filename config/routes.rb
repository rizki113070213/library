Rails.application.routes.draw do
  root 'books#index'
  resources :books, only: [:index, :create] do
    get :search, on: :collection
  end
end
