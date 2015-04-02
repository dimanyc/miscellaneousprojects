Rails.application.routes.draw do
  root 'home#index', as: 'home'
  resources :contacts
end
