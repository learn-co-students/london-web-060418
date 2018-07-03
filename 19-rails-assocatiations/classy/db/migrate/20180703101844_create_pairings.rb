class CreatePairings < ActiveRecord::Migration[5.1]
  def change
    create_table :pairings do |t|
      t.belongs_to :cheese, foreign_key: true
      t.belongs_to :wine, foreign_key: true

      t.timestamps
    end
  end
end
