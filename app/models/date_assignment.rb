class DateAssignment < ApplicationRecord
  has_many :day_schedules, dependent: :destroy
  validates :starts_at, presence: true
  validates :ends_at, presence: true
  validates_uniqueness_of :starts_at, scope: :ends_at, message: "There is already an event with the same dates"
  
end
