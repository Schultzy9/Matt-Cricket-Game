class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.text :name
      t.text :position
      t.integer :total_games
      t.integer :total_runs
      t.integer :total_not_outs
      t.integer :total_balls_bowled
      t.integer :total_wickets
      t.integer :total_runs_conceded
      t.integer :bat__rating
      t.integer :bowl_rating
      t.integer :team_id
      t.timestamps
    end
  end
end
