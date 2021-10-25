class PlayersController < ApplicationController
  def index
    @players = Player.all
  end

  def show
    @player = Player.find params[:id]
  end

  def new
    @player = Player.new
  end

  def create
    @team = params[:team_id]
    if @team.players.count < 11
      player = Player.create player_params
      player.save
      redirect_to root_path

    else
      @message = "This team has too many players. Please delete a player before adding a new one."
      redirect_to new_player_path

    end
  end

  def edit
    @player = Player.find params[:id]
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
    params.require(:player).permit(:name, :position, :team_id)
  end

end
