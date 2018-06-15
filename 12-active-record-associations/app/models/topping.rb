class Topping < ActiveRecord::Base
  has_many :pizza_toppings
  has_many :pizzas, through: :pizza_toppings

  def self.random
    Topping.find(rand(Topping.count) + 1)
  end
end
