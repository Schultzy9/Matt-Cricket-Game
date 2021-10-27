class GamesController < ApplicationController

  def home
    adminteams = User.find_by email: 'admin@ga.co'
    @teams = @current_user.teams + adminteams.teams
  end

  def start
    $t1 = Team.find params[:firstteam]
    $t2 = Team.find params[:secondteam]
    redirect_to t20_path
  end

  def t20
    gon.t1 = $t1.name
    gon.t2 = $t2.name
    t1p1 = $t1.players.find_by position: '1'
    gon.t1p1 = t1p1.name
    t1p2 = $t1.players.find_by position: '2'
    gon.t1p2 = t1p2.name
    t1p3 = $t1.players.find_by position: '3'
    gon.t1p3 = t1p3.name
    t1p4 = $t1.players.find_by position: '4'
    gon.t1p4 = t1p4.name
    t1p5 = $t1.players.find_by position: '5'
    gon.t1p5 = t1p5.name
    t1p6 = $t1.players.find_by position: '6'
    gon.t1p6 = t1p6.name
    t1p7 = $t1.players.find_by position: '7'
    gon.t1p7 = t1p7.name
    t1p8 = $t1.players.find_by position: '8'
    gon.t1p8 = t1p8.name
    t1p9 = $t1.players.find_by position: '9'
    gon.t1p9 = t1p9.name
    t1p10 = $t1.players.find_by position: '10'
    gon.t1p10 = t1p10.name
    t1p11 = $t1.players.find_by position: '11'
    gon.t1p11 = t1p11.name
    t2p1 = $t2.players.find_by position: '1'
    gon.t2p1 = t2p1.name
    t2p2 = $t2.players.find_by position: '2'
    gon.t2p2 = t2p2.name
    t2p3 = $t2.players.find_by position: '3'
    gon.t2p3 = t2p3.name
    t2p4 = $t2.players.find_by position: '4'
    gon.t2p4 = t2p4.name
    t2p5 = $t2.players.find_by position: '5'
    gon.t2p5 = t2p5.name
    t2p6 = $t2.players.find_by position: '6'
    gon.t2p6 = t2p6.name
    t2p7 = $t2.players.find_by position: '7'
    gon.t2p7 = t2p7.name
    t2p8 = $t2.players.find_by position: '8'
    gon.t2p8 = t2p8.name
    t2p9 = $t2.players.find_by position: '9'
    gon.t2p9 = t2p9.name
    t2p10 = $t2.players.find_by position: '10'
    gon.t2p10 = t2p10.name
    t2p11 = $t2.players.find_by position: '11'
    gon.t2p11 = t2p11.name
  end

  def scores
    $t1.players.each do |p|
      p.total_games += 1
      p.save
    end
    $t2.players.each do |p|
      p.total_games += 1
      p.save
    end
    t1p1 = $t1.players.find_by position: '1'
    t1p1.total_runs += params[:t1p1Runs].to_i
    t1p1.total_not_outs += params[:t1p1NotOuts].to_i
    t1p1.save
    t1p2 = $t1.players.find_by position: '2'
    t1p2.total_runs += params[:t1p2Runs].to_i
    t1p2.total_not_outs += params[:t1p2NotOuts].to_i
    t1p2.save
    t1p3 = $t1.players.find_by position: '3'
    t1p3.total_runs += params[:t1p3Runs].to_i
    t1p3.total_not_outs += params[:t1p3NotOuts].to_i
    t1p3.save
    t1p4 = $t1.players.find_by position: '4'
    t1p4.total_runs += params[:t1p4Runs].to_i
    t1p4.total_not_outs += params[:t1p4NotOuts].to_i
    t1p4.save
    t1p5 = $t1.players.find_by position: '5'
    t1p5.total_runs += params[:t1p5Runs].to_i
    t1p5.total_not_outs += params[:t1p5NotOuts].to_i
    t1p5.save
    t1p6 = $t1.players.find_by position: '6'
    t1p6.total_runs += params[:t1p6Runs].to_i
    t1p6.total_not_outs += params[:t1p6NotOuts].to_i
    t1p6.save
    t1p7 = $t1.players.find_by position: '7'
    t1p7.total_runs += params[:t1p7Runs].to_i
    t1p7.total_not_outs += params[:t1p7NotOuts].to_i
    t1p7.save
    t1p8 = $t1.players.find_by position: '8'
    t1p8.total_runs += params[:t1p8Runs].to_i
    t1p8.total_not_outs += params[:t1p8NotOuts].to_i
    t1p8.save
    t1p9 = $t1.players.find_by position: '9'
    t1p9.total_runs += params[:t1p9Runs].to_i
    t1p9.total_not_outs += params[:t1p9NotOuts].to_i
    t1p9.save
    t1p10 = $t1.players.find_by position: '10'
    t1p10.total_runs += params[:t1p10Runs].to_i
    t1p10.total_not_outs += params[:t1p10NotOuts].to_i
    t1p10.save
    t1p11 = $t1.players.find_by position: '11'
    t1p11.total_runs += params[:t1p11Runs].to_i
    t1p11.total_not_outs += params[:t1p11NotOuts].to_i
    t1p11.save
    t2p1 = $t2.players.find_by position: '1'
    t2p1.total_runs += params[:t2p1Runs].to_i
    t2p1.total_not_outs += params[:t2p1NotOuts].to_i
    t2p1.save
    t2p2 = $t2.players.find_by position: '2'
    t2p2.total_runs += params[:t2p2Runs].to_i
    t2p2.total_not_outs += params[:t2p2NotOuts].to_i
    t2p2.save
    t2p3 = $t2.players.find_by position: '3'
    t2p3.total_runs += params[:t2p3Runs].to_i
    t2p3.total_not_outs += params[:t2p3NotOuts].to_i
    t2p3.save
    t2p4 = $t2.players.find_by position: '4'
    t2p4.total_runs += params[:t2p4Runs].to_i
    t2p4.total_not_outs += params[:t2p4NotOuts].to_i
    t2p4.save
    t2p5 = $t2.players.find_by position: '5'
    t2p5.total_runs += params[:t2p5Runs].to_i
    t2p5.total_not_outs += params[:t2p5NotOuts].to_i
    t2p5.save
    t2p6 = $t2.players.find_by position: '6'
    t2p6.total_runs += params[:t2p6Runs].to_i
    t2p6.total_not_outs += params[:t2p6NotOuts].to_i
    t2p6.save
    t2p7 = $t2.players.find_by position: '7'
    t2p7.total_runs += params[:t2p7Runs].to_i
    t2p7.total_not_outs += params[:t2p7NotOuts].to_i
    t2p7.save
    t2p8 = $t2.players.find_by position: '8'
    t2p8.total_runs += params[:t2p8Runs].to_i
    t2p8.total_not_outs += params[:t2p8NotOuts].to_i
    t2p8.save
    t2p9 = $t2.players.find_by position: '9'
    t2p9.total_runs += params[:t2p9Runs].to_i
    t2p9.total_not_outs += params[:t2p9NotOuts].to_i
    t2p9.save
    t2p10 = $t2.players.find_by position: '10'
    t2p10.total_runs += params[:t2p10Runs].to_i
    t2p10.total_not_outs += params[:t2p10NotOuts].to_i
    t2p10.save
    t2p11 = $t2.players.find_by position: '11'
    t2p11.total_runs += params[:t2p11Runs].to_i
    t2p11.total_not_outs += params[:t2p11NotOuts].to_i
    t2p11.save
    redirect_to '/games'
  end

end
