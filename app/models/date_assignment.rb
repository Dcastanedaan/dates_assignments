class DateAssignment < ApplicationRecord
  has_many :day_schedules
  validates :starts_at, presence: true
  validates :ends_at, presence: true
end
