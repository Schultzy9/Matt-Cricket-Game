User.destroy_all
u1 = User.create :email => 'admin@ga.co', :name => 'God', :admin => true, :password => 'chicken'
u2 = User.create :email => 'matt@ga.co', :name => 'Matt', :admin => false, :password => 'chicken'
puts "#{User.count} users created"

Team.destroy_all
t1 = Team.create :name => 'Australia', :games_won => 0, :games_lost => 0, :games_tied => 0
t2 = Team.create :name => 'India', :games_won => 0, :games_lost => 0, :games_tied => 0
puts "#{Team.count} teams created"

Player.destroy_all
p1 = Player.create :name => "David Warner", :position => "1"
p2 = Player.create :name => "Aaron Finch", :position => "2"
p3 = Player.create :name => "Steve Smith", :position => "3"
p4 = Player.create :name => "Marnus Labuschagne", :position => "4"
p5 = Player.create :name => "Glen Maxwell", :position => "5"
p6 = Player.create :name => "Marcus Stoinis", :position => "6"
p7 = Player.create :name => "Matthew Wade", :position => "7"
p8 = Player.create :name => "Pat Cummins", :position => "8"
p9 = Player.create :name => "Mitchell Starc", :position => "9"
p10 = Player.create :name => "Adam Zampa", :position => "10"
p11 = Player.create :name => "Kane Richardson", :position => "11"
p12 = Player.create :name => "KL Rahul", :position => "1"
p13 = Player.create :name => "Rohit Sharma", :position => "2"
p14 = Player.create :name => "Suryakumar Yadav", :position => "3"
p15 = Player.create :name => "Virat Kohli", :position => "4"
p16 = Player.create :name => "Hardik Pandya", :position => "5"
p17 = Player.create :name => "Ravindra Jadeja", :position => "6"
p18 = Player.create :name => "Rishabh Pant", :position => "7"
p19 = Player.create :name => "Ravichandran Ashwin", :position => "8"
p20 = Player.create :name => "Bhuvneshwar Kumar", :position => "9"
p21 = Player.create :name => "Rahul Chahar", :position => "10"
p22 = Player.create :name => "Inshant Sharma", :position => "11"
puts "#{Player.count} players created"

puts "Players and Teams"
t1.players << p1 << p2 << p3 << p4 << p5 << p6 << p7 << p8 << p9 << p10 << p11
t2.players << p12 << p13 << p14 << p15 << p16 << p17 << p18 << p19 << p20 << p21 << p22

puts "Teams and Users"
u2.teams << t1 << t2
