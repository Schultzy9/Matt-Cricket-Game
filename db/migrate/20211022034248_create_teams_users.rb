class CreateTeamsUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :teams_users, :id => false do |t|
      t.integer :team_id
      t.integer :user_id
    end
  end
end
