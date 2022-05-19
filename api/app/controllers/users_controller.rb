class UsersController < ApplicationController
  # include Error::ErrorHandler
  skip_before_action :verify_authenticity_token

  def index
    puts "this is from the users controller"
    render json: {
      "something": "value"
    }
  end 

  def getAllUsers
   render json: {
    }
  end

  def createUser

    u = User.new
    u.username = params[:username]
    u.password = params[:password]
    u.bio = params[:bio]
    u.email = params[:email]
  # begin  
  # rescue_from ActiveRecord::RecordNotFound => e
  #   render json: {
  #     message: "There is an error, please enter a bio value"
  #   }
  #   # p "PLEASE ENTER A BIO"
  #   end


    u.save
    render json: params
    return params
  end
end

