Rails.application.routes.draw do
  root 'home#design', as: 'home'
   get '/about' => "home#about"
  resources :contacts, only:[:create]
end
