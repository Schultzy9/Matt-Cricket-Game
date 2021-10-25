# User.destroy_all
# u1 = User.create :email => 'admin@ga.co', :name => 'God', :admin => true
# u2 = User.create :email => 'matt@ga.co', :name => 'Matt', :admin => false
# puts "#{User.count} users created"

Team.destroy_all
t1 = Team.create :name => 'Australia', :games_won => 0, :games_lost => 0, :games_tied => 0
t2 = Team.create :name => 'India', :games_won => 0, :games_lost => 0, :games_tied => 0
puts "#{Team.count} teams created"

Player.destroy_all
p1 = Player.create :name => "David Warner", :position => "Opening Batsmen"
p2 = Player.create :name => "Aaron Finch", :position => "Opening Batsmen"
p3 = Player.create :name => "Steve Smith", :position => "Batsmen"
p4 = Player.create :name => "Marnus Labuschagne", :position => "Batsmen"
p5 = Player.create :name => "Glen Maxwell", :position => "Batsmen"
p6 = Player.create :name => "Marcus Stoinis", :position => "All-Rounder"
p7 = Player.create :name => "Matthew Wade", :position => "Wicket-Keeper"
p8 = Player.create :name => "Pat Cummins", :position => "Bowler"
p9 = Player.create :name => "Mitchell Starc", :position => "Bowler"
p10 = Player.create :name => "Adam Zampa", :position => "Spin-Bowler"
p11 = Player.create :name => "Kane Richardson", :position => "Bowler"
p12 = Player.create :name => "KL Rahul", :position => "Opening Batsmen"
p13 = Player.create :name => "Rohit Sharma", :position => "Opening Batsmen"
p14 = Player.create :name => "Suryakumar Yadav", :position => "Batsmen"
p15 = Player.create :name => "Virat Kohli", :position => "Batsmen"
p16 = Player.create :name => "Hardik Pandya", :position => "Batsmen"
p17 = Player.create :name => "Ravindra Jadeja", :position => "All-Rounder"
p18 = Player.create :name => "Rishabh Pant", :position => "Wicket-Keeper"
p19 = Player.create :name => "Ravichandran Ashwin", :position => "Bowler"
p20 = Player.create :name => "Bhuvneshwar Kumar", :position => "Bowler"
p21 = Player.create :name => "Rahul Chahar", :position => "Bowler"
p22 = Player.create :name => "Inshant Sharma", :position => "Bowler"
puts "#{Player.count} players created"

puts "Players and Teams"
t1.players << p1 << p2 << p3 << p4 << p5 << p6 << p7 << p8 << p9 << p10 << p11
t2.players << p12 << p13 << p14 << p15 << p16 << p17 << p18 << p19 << p20 << p21 << p22

puts "Teams and Users"
u2.teams << t1 << t2
