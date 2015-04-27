Rails.application.routes.draw do
  #root 'home#design', as: 'home'
  get '/about' => "home#about"
  get '/design' => "home#design"
  get '/contact' => "home#contact"
  resources :contacts, only:[:create]
  get '/' => 'home#index'
  root 'home#index', as: 'home'
end
