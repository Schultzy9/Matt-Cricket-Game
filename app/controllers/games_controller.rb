class GamesController < ApplicationController

  def home
    @teams = Team.all
  end

  def start
    $t1 = Team.find params[:firstteam]
    $t2 = Team.find params[:secondteam]
    redirect_to t20_path
  end

  def t20
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
  end

end
