class ChangeEndsAtTypeInDateAssignments < ActiveRecord::Migration[7.0]
  def change
    change_column :date_assignments, :starts_at, :date
    change_column :date_assignments, :ends_at, :date
  end
end
