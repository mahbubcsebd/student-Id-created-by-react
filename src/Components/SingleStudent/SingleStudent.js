import React from "react";
import "./SingleStudent.css";


function SingleStudent(props){
return(
  <>
    <div className="single-student-card">
      <h2 className="name">{props.name}</h2>
      <p className="age">Age: {props.age}</p>
      <p className="gender">Gender: {props.gender}</p>
      <p className="phone">Mobile: {props.phone}</p>
    </div>
  </>
);
};

export default SingleStudent;