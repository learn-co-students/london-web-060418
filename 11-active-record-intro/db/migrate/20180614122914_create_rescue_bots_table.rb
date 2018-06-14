class CreateRescueBotsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :rescue_bots do |t|
      t.string :name
    end
  end
end
