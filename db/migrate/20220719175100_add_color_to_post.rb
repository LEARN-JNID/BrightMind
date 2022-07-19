class AddColorToPost < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :color, :string
  end
end
