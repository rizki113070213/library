Rails.application.routes.draw do
  root 'hello_world#index'
  get 'books/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end