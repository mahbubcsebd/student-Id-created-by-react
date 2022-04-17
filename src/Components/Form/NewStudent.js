import React from "react";
import StudentForm from "./StudentForm";
import "./NewStudent.css"

const NewStudent = (props) => {
  // Student Account er Object theke data anar jonno
  const saveStudentDataHandler = (enteredStudentData) => {
    const StudentData = {
      ...enteredStudentData,
      id: Math.random().toString(),
    };
    props.onAddStudent(StudentData);
  };



  return(
    <>
      <StudentForm onSaveStudentData={saveStudentDataHandler} />
    </>
  )
}

export default NewStudent;