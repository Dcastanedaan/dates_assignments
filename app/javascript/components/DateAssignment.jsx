import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const DateAssignment = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [daySchedule, setDaySchedule] = useState(
    {
      day: 'monday',
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
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDaySchedule({
        ...daySchedule,
        [event.target.name] : event.target.value
    })
}

  return(
    <div className="d-flex flex-column justify-content-center align-items-center vh-80 p-5 " >
      <div className="jumbotron jumbotron-fluid bg-transparent">

        <div className="display-4 mb-2 align-items-center">
          <h1>Schedule</h1>
        </div>
        <div className="d-flex display-content-between gap-2">
          
          <p>Start at: {dateAssignment.starts_at}</p>
          
          <p>End at: {dateAssignment.ends_at}</p>
        </div>
        <div>
        <button onClick={homeNavigate} className="btn btn-lg custom-button ml-4">Create Day </button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mt-4">
            <div className="row">
              <div className="col-3">
                <div className="form-group">
                  <label htmlFor="start_date">Día:</label>
                  <select className=" form-control"   name="day" onChange={handleInputChange} >
                    <option value="monday">Lunes</option>
                    <option value="tuesday">Martes</option>
                    <option value="wednesday">Miercoles</option>
                    <option value="thursday">Jueves</option>
                    <option value="friday">Viernes</option>
                    <option value="saturday">Sabado</option>
                    <option value="sunday">Domingo</option>
                  </select>
                </div>
              </div>
              <div className="col-2">
                <div className="form-group">
                  <label htmlFor="hours">Hour:</label>
                  <input type="number" max="23" className="form-control" id="hours" name="hour"   placeholder="Hour" onChange={handleInputChange} />
                </div>
              </div>
              <div className="col-2">
                <div className="form-group">
                  <label htmlFor="minutes">Min:</label>
                  <input type="number" max="59" className="form-control" name="minute"   id="minutes" placeholder="Minut" onChange={handleInputChange} />
                </div>
              </div>
              <div className="col-2">
                <div className="form-group">
                  <label htmlFor="minutes">Quote:</label>
                  <input type="number" className="form-control" id="minutes" name="quota"  placeholder="Quote" onChange={handleInputChange} />
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

        <div className=" bg-light">
          <ul className="list-group list-group-flush">
            {dateAssignment.day_schedules && dateAssignment.day_schedules.map((assignment) => (
              <li key={assignment.id} className="list-group-item">
                <div className="d-flex justify-content-between gap-2">
                  
                  <table class="table">
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
                        <th>{assignment.day}</th>
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

        <button onClick={homeNavigate} className="btn btn-lg custom-button ml-4">Back</button>
      </div>

    </div>
  
  );
};




export default DateAssignment
