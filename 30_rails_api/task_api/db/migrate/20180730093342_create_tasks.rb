class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :priority
      t.string :description
      t.integer :list_id

      t.timestamps
    end
  end
end
