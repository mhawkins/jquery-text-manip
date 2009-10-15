require 'rubygems'
require 'sinatra'
require 'haml'
require 'sass'

mime :style, 'text/css'

get '/' do
  haml :home
end

get '/stylesheets/application.css' do
  content_type :style
  sass :application
end