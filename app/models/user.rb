class User < ApplicationRecord
  validates :email, :presence => true, :uniqueness => true
  has_secure_password
  has_many :teams
  has_many :players, :through => :teams
end
