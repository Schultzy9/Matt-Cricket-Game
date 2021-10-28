class TeamsController < ApplicationController

  def index
    @teams = @current_user.teams
  end

  def show
    @team = Team.find params[:id]
  end

  def new
  end

  def create
    team = Team.new
    team.name = params[:name]
    @current_user.teams << team
    team.save
    p1 = Player.new
    p1.name = params[:p1]
    p1.position = 1
    p1.total_games = p1.total_runs = p1.total_not_outs = 0
    p1.save
    p2 = Player.new
    p2.name = params[:p2]
    p2.position = 2
    p2.total_games = p2.total_runs = p2.total_not_outs = 0
    p2.save
    p3 = Player.new
    p3.name = params[:p3]
    p3.position = 3
    p3.total_games = p3.total_runs = p3.total_not_outs = 0
    p3.save
    p4 = Player.new
    p4.name = params[:p4]
    p4.position = 4
    p4.total_games = p4.total_runs = p4.total_not_outs = 0
    p4.save
    p5 = Player.new
    p5.name = params[:p5]
    p5.position = 5
    p5.total_games = p5.total_runs = p5.total_not_outs = 0
    p5.save
    p6 = Player.new
    p6.name = params[:p6]
    p6.position = 6
    p6.total_games = p6.total_runs = p6.total_not_outs = 0
    p6.save
    p7 = Player.new
    p7.name = params[:p7]
    p7.position = 7
    p7.total_games = p7.total_runs = p7.total_not_outs = 0
    p7.save
    p8 = Player.new
    p8.name = params[:p8]
    p8.position = 8
    p8.total_games = p8.total_runs = p8.total_not_outs = 0
    p8.save
    p9 = Player.new
    p9.name = params[:p9]
    p9.position = 9
    p9.total_games = p9.total_runs = p9.total_not_outs = 0
    p9.save
    p10 = Player.new
    p10.name = params[:p10]
    p10.position = 10
    p10.total_games = p10.total_runs = p10.total_not_outs = 0
    p10.save
    p11 = Player.new
    p11.name = params[:p11]
    p11.position = 11
    p11.total_games = p11.total_runs = p11.total_not_outs = 0
    p11.save
    team.players << p1 << p2 << p3 << p4 << p5 << p6 << p7 << p8 << p9 << p10 << p11
    redirect_to teams_path
  end

  def edit
    @team = Team.find params[:id]
    check_for_login
  end

  def update
    team = Team.find params[:id]
    team.update team_params
    redirect_to team
  end

  def destroy
    team = Team.find params[:id]
    team.destroy
    redirect_to teams_path
  end

  private
  def team_params
    params.require(:team).permit(:name)
  end

end
