Rails.application.routes.draw do
  root to: "home#index"
  get '*all', to: 'home#index'
end
