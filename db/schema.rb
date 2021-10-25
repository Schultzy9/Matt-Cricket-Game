# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_22_034248) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "players", force: :cascade do |t|
    t.text "name"
    t.text "position"
    t.integer "total_games"
    t.integer "total_runs"
    t.integer "total_not_outs"
    t.integer "total_balls_bowled"
    t.integer "total_wickets"
    t.integer "total_runs_conceded"
    t.integer "bat__rating"
    t.integer "bowl_rating"
    t.integer "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players_teams", id: false, force: :cascade do |t|
    t.integer "team_id"
    t.integer "player_id"
  end

  create_table "teams", force: :cascade do |t|
    t.text "name"
    t.text "logo"
    t.integer "games_played"
    t.integer "games_won"
    t.integer "games_lost"
    t.integer "games_tied"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams_users", id: false, force: :cascade do |t|
    t.integer "team_id"
    t.integer "user_id"
  end

  create_table "users", force: :cascade do |t|
    t.text "email"
    t.text "name"
    t.string "password_digest"
    t.boolean "admin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
