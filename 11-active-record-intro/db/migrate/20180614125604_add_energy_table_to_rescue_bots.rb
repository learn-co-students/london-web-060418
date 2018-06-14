class AddEnergyTableToRescueBots < ActiveRecord::Migration[5.2]
  def change
    add_column :rescue_bots, :energy, :integer
  end
end
