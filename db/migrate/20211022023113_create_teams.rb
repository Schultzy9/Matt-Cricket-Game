class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.text :name
      t.text :logo
      t.integer :games_played
      t.integer :games_won
      t.integer :games_lost
      t.integer :games_tied
      t.integer :user_id
      t.timestamps
    end
  end
end
