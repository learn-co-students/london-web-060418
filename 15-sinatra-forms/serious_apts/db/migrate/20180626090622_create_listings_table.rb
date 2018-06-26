class CreateListingsTable < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :neighborhood
      t.integer :num_rooms
      t.integer :price
    end
  end
end
