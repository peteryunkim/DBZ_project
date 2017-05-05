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
    @character = Character.create(character_params)
  end


  private

  def character_params
    params.require(:character).permit(:name, :race, :power_level, :DOB, :special_techniques)
  end



end
