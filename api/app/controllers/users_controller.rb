class UsersController < ApplicationController
  def index
    puts "this is from the users controller"
    render json: {
      "something": "value"
    }
  end 
end
 