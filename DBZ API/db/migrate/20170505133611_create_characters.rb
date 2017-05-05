class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :race
      t.integer :power_level
      t.string :DOB
      t.string :special_techniques

      t.timestamps
    end
  end
end
