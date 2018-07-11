class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :price
      t.belongs_to :brand, foreign_key: true

      t.timestamps
    end
  end
end
