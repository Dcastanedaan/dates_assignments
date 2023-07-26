// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// // const DateAssignments = () => {
// //   const navigate = useNavigate();
// //   const [dateAssignments, setDateAssignments] = useState([]);
// // };

// // useEffect(() => {
// //   const url = "/api/v1/date_assignments/index";
// //   fetch(url)
// //     .then((res) => {
// //       if (res.ok) {
// //         return res.json();
// //       }
// //       throw new Error("Network response was not ok.");
// //     })
// //     .then((res) => setDateAssignments(res))
// //     .catch(() => navigate("/"));
// // }, []);

// // const allDateAssignments = dateAssignments.map((dateAssignment, index) => (
// //   <div key={index} className="col-md-6 col-lg-4">
// //     <div className="card mb-4">
// //       {/* Aquí puedes mostrar las imágenes relacionadas con las asignaciones de fechas */}
// //       <div className="card-body">
// //         <h5 className="card-title">
// //           Starts at: {dateAssignment.starts_at} - Ends at: {dateAssignment.ends_at}
// //         </h5>
// //         {/* Agrega cualquier otra información relacionada con las asignaciones de fechas */}
// //         {/* Por ejemplo, si tienes una vista detallada para cada asignación, puedes utilizar Link para navegar a esa vista */}
// //         <Link to={`/date_assignment/${dateAssignment.id}`} className="btn custom-button">
// //           View Assignment
// //         </Link>
// //       </div>
// //     </div>
// //   </div>
// // ));

// // const noDateAssignment = (
// //   <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
// //     <h4>
// //       No date assignments yet. Why not <Link to="/new_date_assignment">create one</Link>
// //     </h4>
// //   </div>
// // );

// // return (
// //   <>
// //     {/* <section className="jumbotron jumbotron-fluid text-center">
// //       <div className="container py-5">
// //         <h1 className="display-4">Date Assignments for every occasion</h1>
// //         <p className="lead text-muted">
// //           We’ve pulled together our most popular date assignments, our latest
// //           additions, and our editor’s picks, so there’s sure to be something
// //           tempting for you to try.
// //         </p>
// //       </div>
// //     </section> */}
// //     {/* <div className="py-5">
// //       <main className="container">
// //         <div className="text-end mb-3">
// //           <Link to="/date_assignment" className="btn custom-button">
// //             Create New Date Assignment
// //           </Link>
// //         </div>
// //         <div className="row">
// //           {dateAssignments.length > 0 ? allDateAssignments : noDateAssignment}
// //         </div>
// //         <Link to="/" className="btn btn-link">
// //           Home
// //         </Link>
// //       </main>
// //     </div> */}
// //     <div>
// //       <h1>Hola</h1>
// //     </div>
// //   </>
// // );

// // export default DateAssignments;
// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // const DateAssignments = () => {//componente funcional
// //   const navigate = useNavigate();
// //   const [date_assignment, set_date_assignment] = useState([]); 
// // };

// // export default DateAssignments 
// // import React, { useState } from 'react'; 
 
// // function DateAssignments() { 
// // Declaramos una nueva variable de estado llamando al Hook useState, la cual llamaremos “count” 
// // const [count, setCount] = useState(0); 
// // return ( 
// // 	<div> 
// // 		<h1> El botón ha sido pulsado {count} veces </h1> 
// // 		// Llamamos a setCount con un nuevo valor y React actualiza el componente
// // 		<button onClick={() => setCount(count + 1)} > 
// // 			Púlsame 
// // 		</button> 
// // 	</div> 
// // 	)
// // };

// const DateAssignments = () => {
//   return (
//     <div>
//       <h2> Oelo</h2>
      
      
//     </div>
//   );
// };

// export default DateAssignments;
// import React from "react";
// import DateAssignments from "./components/DateAssignments";


// import React from "react";

// const DateAssignments = () => {
//   return (
//     <div>
//       <h2>Oelo</h2>
//       {/* Puedes agregar más elementos JSX aquí */}
//     </div>
//   );
// };

// export default DateAssignments;
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const DateAssignments = () => {
  // const navigate = useNavigate();
  // const [recipes, setDateAssignments] = useState([]);
// };

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const DateAssignments = () => {
  const navigate = useNavigate();
  const [dateAssignments, setDateAssignments] = useState([]);
  const homeNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    const url = "/api/v1/dates_assignments/index"; // Corregir la URL aquí
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setDateAssignments(res))
      .catch(() => navigate("/"));
  }, []);

  return (
    
    <div className="d-flex flex-column justify-content-center align-items-center vh-80 p-5 " >
      <div className="jumbotron jumbotron-fluid bg-transparent">

        <div className="display-4 mb-">
          <h1>Date Assignments</h1>
        </div>
        {/* Aquí puedes mostrar la lista de dateAssignments */}
        <div className="p-3 bg-light">

          <ul className="list-group list-group-flush">
            {dateAssignments.map((assignment) => (
              <li key={assignment.id} className="list-group-item">
                <div className="d-flex justify-content-between gap-2">
                  <p>Start at: {assignment.starts_at}</p>
                  <p>End at: {assignment.ends_at}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={homeNavigate} className="btn btn-lg custom-button ml-4">Back</button>
    </div>
  );
};

export default DateAssignments;
