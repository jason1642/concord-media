class UsersController < ApplicationController

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
    u.username = "anewuser1"
    u.password = "newpass1"
    u.bio = "newbio1"
    u.email = "newemail"

    puts u.username
    u.save
    render json: u
  end
end

