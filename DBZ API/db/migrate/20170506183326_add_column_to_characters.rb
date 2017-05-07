class AddColumnToCharacters < ActiveRecord::Migration[5.0]
  def change
    add_column :characters, :img, :string
  end
end
