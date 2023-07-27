class Api::V1::DatesAssignmentsController < ApplicationController
  before_action :set_data_assignment, only: %i[show destroy]

  def index
    dates_assignments = DateAssignment.all.order(starts_at: :desc)
    render json: dates_assignments
  end

  def create
    data_assignment = DateAssignment.create!(date_assignment_params)
    if data_assignment
      render json: data_assignment
    else
      render json: data_assignment.errors
    end
  end

  def create_day
    day_schedules = DaySchedule.create!(day_schedule_params)
    if day_schedules
      render json: day_schedules
    else
      render json: day_schedules.errors
    end
  end

  def show
    render json: {
      starts_at: @data_assignment.starts_at,
      ends_at: @data_assignment.ends_at,
      day_schedules: @data_assignment.day_schedules,

    }
  end

  def destroy
    @dates_assignment&.destroy!
    render json: { message: 'Date Assignment deleted!'}
  end

  private

  def date_assignment_params
    params.permit(:starts_at, :ends_at)
  end

  def day_schedule_params
    params.permit(:day, :hour, :minute, :quota, :date_assignment_id)
  end

  def set_data_assignment
    @data_assignment = DateAssignment.find(params[:id])
  end

  def set_day_schedule
    @day_schedule = DaySchedule.find(params[:id])
  end
end
