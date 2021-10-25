class Team < ApplicationRecord
  has_many :players
  belongs_to :user, :optional => true
end
