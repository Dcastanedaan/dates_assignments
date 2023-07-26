class Api::V1::DatesAssignmentsController < ApplicationController
  before_action :set_data_assignment, only: %i[show destroy]

  def index
    dates_assignments = DateAssignment.all.order(created_at: :desc)
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

  def show
    render json: @dates_assignment
  end

  def destroy
    @dates_assignment&.destroy!
    render json: { message: 'Date Assignment deleted!'}
  end

  private

  def date_assignment_params
    params.permit(created_at, ends_at)
  end

  def set_data_assignment
    @data_assignment = DateAssignment.find(params[:id])
  end
end
