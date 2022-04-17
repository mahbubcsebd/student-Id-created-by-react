import React from "react";
import SingleStudent from "../SingleStudent/SingleStudent";
import NewStudent from "../Form/NewStudent";
import "./StudentsId.css";


function StudentsId () {
  const addStudentHandler = (newStudent) => {
    const moreStudent = {
      ...newStudent,
    };
    console.log(moreStudent);
  }


  const StudentsInformation = [
    {id: 1, sName: "Mahbubur Rahman", sAge: 25, sGender: "Male", phone: 15},
    {id: 2, sName: "Shahadat", sAge: 26, sGender: "Male", phone: 47},
    {id: 3, sName: "SalahUddin", sAge: 24, sGender: "Male", phone: 54},
  ];


  return (
    <>
      <NewStudent onAddStudent={addStudentHandler}/>
      <div className="student-card-wrapper">
        <SingleStudent name={StudentsInformation[0].sName} age={StudentsInformation[0].sAge} gender={StudentsInformation[0].sGender} phone={StudentsInformation[0].phone}/>

        <SingleStudent name={StudentsInformation[1].sName} age={StudentsInformation[1].sAge} gender={StudentsInformation[1].sGender} phone={StudentsInformation[1].phone}/>

        <SingleStudent name={StudentsInformation[2].sName} age={StudentsInformation[2].sAge} gender={StudentsInformation[2].sGender} phone={StudentsInformation[2].phone}/>
      </div>
    </>
  );
};


export default StudentsId;