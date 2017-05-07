class CharactersController < ApplicationController

  def index
    @z_fighters = Character.all
    render json: @z_fighters
  end

  def show
    @character = Character.find(params[:id])
    render json: @character
  end


  def create
    # byebug
    @character = Character.new(character_params)
    render json: @character
  end


  private

  def character_params
    params.require(:character).permit(:name, :race, :power_level, :DOB, :special_techniques, :img)
  end



end
