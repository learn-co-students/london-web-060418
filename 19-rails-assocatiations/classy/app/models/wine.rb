class Wine < ApplicationRecord
  belongs_to :region
  has_many :pairings
  has_many :cheeses, through: :pairings
end
