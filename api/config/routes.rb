Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "/users", to: "users#index"
  get "/get-all-users", to: "users#getAllUsers"
  post "/create-user", to: "users#createUser"
  # Defines the root path route ("/")
  # root "articles#index"
end
  