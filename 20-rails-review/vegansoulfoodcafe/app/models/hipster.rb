class Hipster < ApplicationRecord
  has_many :hipster_items
  has_many :items, through: :hipster_items
  has_many :brands, through: :items

  def caps_name
    self.name.upcase
  end
end
