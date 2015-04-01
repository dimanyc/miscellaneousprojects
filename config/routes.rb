Rails.application.routes.draw do
  root 'home#index', as: 'home', layout: 'false'
end
