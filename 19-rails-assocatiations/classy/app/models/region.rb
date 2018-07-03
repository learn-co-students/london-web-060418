class Region < ApplicationRecord
  has_many :wines
  
  validates :name, uniqueness: true, presence: true
end
