Rails.application.routes.draw do
  root 'home#design', as: 'home'
  get '/about' => "home#about"
  get '/design' => "home#design"
  resources :contacts, only:[:create]
end
