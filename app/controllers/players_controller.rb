class PlayersController < ApplicationController

  def show
    @player = Player.find params[:id]
  end

  def edit
    @player = Player.find params[:id]
    @team = Team.find @player.team_id
    check_for_login
  end

  def update
    player = Player.find params[:id]
    player.update player_params
    redirect_to player
  end

  def destroy
    player = Player.find params[:id]
    player.destroy
    redirect_to players_path
  end

  private
  def player_params
    params.require(:player).permit(:name)
  end

end
