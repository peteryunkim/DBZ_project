class ChangeColumnInCharacter < ActiveRecord::Migration[5.0]
  def change
    change_column :characters, :power_level, :string
  end
end
