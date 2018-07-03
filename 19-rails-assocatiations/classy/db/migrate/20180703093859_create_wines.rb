class CreateWines < ActiveRecord::Migration[5.1]
  def change
    create_table :wines do |t|
      t.string :name
      t.belongs_to :region, foreign_key: true

      t.timestamps
    end
  end
end
