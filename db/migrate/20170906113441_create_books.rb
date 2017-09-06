class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :genre
      t.string :publisher
      t.text :synopsis

      t.timestamps
    end
  end
end
