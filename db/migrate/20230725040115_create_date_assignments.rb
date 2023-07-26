class CreateDateAssignments < ActiveRecord::Migration[7.0]
  def change
    create_table :date_assignments do |t|
      t.date :starts_at, null: false
      t.date :ends_at, null: false

      t.timestamps
    end
  end
end
