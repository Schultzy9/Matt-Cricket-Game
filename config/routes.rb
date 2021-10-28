Rails.application.routes.draw do
  root :to => 'pages#home'
  resources :users, :only => [:new, :create]

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  resources :teams
  resources :players

  get '/games' => 'games#home'
  post '/games' => 'games#start'
  get '/games/t20' => 'games#t20', :as => :t20
  post '/games/t20' => 'games#scores', :as => :scores

end
