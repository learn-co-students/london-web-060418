class CreateBrands < ActiveRecord::Migration[5.1]
  def change
    create_table :brands do |t|
      t.string :name
      t.integer :hipster_rating

      t.timestamps
    end
  end
end
