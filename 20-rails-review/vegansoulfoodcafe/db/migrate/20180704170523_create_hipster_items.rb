class CreateHipsterItems < ActiveRecord::Migration[5.1]
  def change
    create_table :hipster_items do |t|
      t.integer :item_id
      t.integer :hipster_id

      t.timestamps
    end
  end
end
