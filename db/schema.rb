# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_07_27_032407) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "date_assignments", force: :cascade do |t|
    t.date "starts_at", null: false
    t.date "ends_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "day_schedules", force: :cascade do |t|
    t.string "day"
    t.integer "hour"
    t.integer "minute"
    t.integer "quota"
    t.bigint "date_assignment_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["date_assignment_id"], name: "index_day_schedules_on_date_assignment_id"
  end

  add_foreign_key "day_schedules", "date_assignments"
end
