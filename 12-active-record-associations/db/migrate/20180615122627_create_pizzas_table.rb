class CreatePizzasTable < ActiveRecord::Migration[5.2]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.integer :price
      t.integer :eater_id
    end
  end
end
