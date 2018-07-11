class Item < ApplicationRecord
  belongs_to :brand
  has_many :hipster_items
  has_many :hipsters, through: :hipster_items

  validates :name, presence: true, uniqueness: true
  validates :price, numericality: {
    greater_than_or_equal_to: 0
  }

  def whatever
    2
  end
end
