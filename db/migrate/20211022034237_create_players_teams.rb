class CreatePlayersTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :players_teams, :id => false do |t|
      t.integer :team_id
      t.integer :player_id
    end
  end
end
