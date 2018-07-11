class CreateHipsters < ActiveRecord::Migration[5.1]
  def change
    create_table :hipsters do |t|
      t.string :name

      t.timestamps
    end
  end
end
