import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const DateAssignment = () => {
  const params = useParams();
  const navigate = useNavigate();
  
  const [daySchedule, setDaySchedule] = useState(
    {
      day: 'Monday',
      hour: '',
      minute: '',
      quota: '',
      date_assignment_id: params.id
    }
  );
  const [dateAssignment, setDateAssignment] = useState([]);
  const homeNavigate = () => {
    navigate("/");
  };
  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Network response was not ok.");
    })
      .then((res) => setDateAssignment(res))
      .catch((error) => console.log(error) );
  }, [params.id]);

  const onSubmit = (event) => {
    event.preventDefault();
    const { hour, minute, quota } = daySchedule;

    if (!hour || !minute || !quota) {
      alert('Please fill all the fields');
      return;
    }
    if (hour < 1 || hour > 12 ) {
      alert('The hour must be between 1 and 12');
      return;
    }
    if (minute < 0 || minute > 59 ) {
      alert('The minut must be between 0 and 59');
      return;
    }
    const url = "/api/v1/dates_assignments/create_day";
    console.log(daySchedule)

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(daySchedule),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error.message));
  }
  const handleInputChange = (event) => {
    setDaySchedule({
        ...daySchedule,
        [event.target.name] : event.target.value
    })
  }

  return(
    <div className="d-flex flex-column justify-content-center align-items-center mt-4">
      <div className="jumbotron jumbotron-fluid bg-transparent mb-3">
        <div className="display-4 mb-2 align-items-center">
          <h1 className="display-4">Schedule</h1>
        </div>
        <div className="d-flex display-content-between gap-2">
          <p className="lead">Start at: {dateAssignment.starts_at}</p>
          <p className="lead">End at: {dateAssignment.starts_at}</p>
        </div>
        <div>
        <button onClick={homeNavigate} className="btn btn-lg custom-button ml-4">Back </button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mt-4">
            <div className="row">
              <div className="col-3">
                <div className="form-group">
                  <label htmlFor="start_date" >Day:</label>
                  <select className=" form-control"   name="day" onChange={handleInputChange} >
                    <option value="Monday">Lunes</option>
                    <option value="Tuesday">Martes</option>
                    <option value="Wednesday">Miercoles</option>
                    <option value="Thursday">Jueves</option>
                    <option value="Friday">Viernes</option>
                    <option value="Saturday">Sabado</option>
                    <option value="Sunday">Domingo</option>
                  </select>
                </div>
              </div>
              <div className="col-2">
                <div className="form-group">
                  <label htmlFor="hours">Hour:</label>
                  <input type="number" max="23" className="form-control" id="hours" name="hour" placeholder="00" onChange={handleInputChange} />
                </div>
              </div>
              <div className="col-2">
                <div className="form-group">
                  <label htmlFor="minutes">Min:</label>
                  <input type="number" max="59" className="form-control" name="minute" id="minutes" placeholder="00" onChange={handleInputChange} />
                </div>
              </div>
              <div className="col-2">
                <div className="form-group">
                  <label htmlFor="minutes">Quote:</label>
                  <input type="number" className="form-control" id="minutes" name="quota" placeholder="0" onChange={handleInputChange} />
                </div>
              </div>
              <div className="col-3 mt-4">
                <button type="submit" className="btn custom-button btn-sm mt-2" >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className=" bg-light w-100 p-5 mt-2">
        <ul className="list-group list-group-flush">
          {dateAssignment.day_schedules && dateAssignment.day_schedules.slice().reverse().map((assignment) => (
            <li key={assignment.id} className="list-group-item">
              <div className="d-flex justify-content-between gap-2">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Day</th>
                      <th scope="col">Hour</th>
                      <th scope="col">Min</th>
                      <th scope="col">Quote</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{assignment.day}</td>
                      <td>{assignment.hour}</td>
                      <td>{assignment.minute}</td>
                      <td>{assignment.quota}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};




export default DateAssignment
