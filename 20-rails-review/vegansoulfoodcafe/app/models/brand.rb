class Brand < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  validates :hipster_rating, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 10, only_integer: true }

  has_many :items
end
