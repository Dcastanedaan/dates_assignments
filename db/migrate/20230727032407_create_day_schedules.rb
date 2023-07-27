class CreateDaySchedules < ActiveRecord::Migration[7.0]
  def change
    create_table :day_schedules do |t|
      t.string :day
      t.integer :hour
      t.integer :minute
      t.integer :quota
      t.references :date_assignment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
