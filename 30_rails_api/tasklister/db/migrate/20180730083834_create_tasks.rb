class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :priority
      t.integer :list_id
      t.string :description

      t.timestamps
    end
  end
end
