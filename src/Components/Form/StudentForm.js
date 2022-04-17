import React, { useState } from "react";
import "./StudentForm.css"

function StudentForm (props){
  // Here we can write pure javascript

  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [gender,setGender] = useState('');
  const [phone,setPhone] = useState('');

const nameHandler = (event) => {
  setName(event.target.value);
};

const ageHandler = (event) => {
  setAge(event.target.value);
};

const genderHandler = (event) => {
  setGender(event.target.value);
};

const phoneHandler = (event) => {
  setPhone(event.target.value);
};


  const submitHandler = (event) => {
    event.preventDefault();

    const studentData = {
      name : name,
      age : age,
      gender : gender,
      phone : phone,
    };

    // onSaveStudentData er vitore thaka saveStudentDataHandler Function ti invoked korar jonno uporer StudentForm e parameter hisabe props pass kore submitHandler e ei code ti bosate hobe:
    props.onSaveStudentData(studentData);

    console.log(studentData);
    // For all input clear after form Submitted
    setName('');
    setAge('');
    setGender('');
    setPhone('');
  };



  return (
    <>
    <form onSubmit={submitHandler}>
      <div className="input-group">
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" onChange={nameHandler} value={name}/>
      </div>
      <div className="input-group">
        <label htmlFor="Age">Age:</label>
        <input type="text" id="Age" onChange={ageHandler} value={age}/>
      </div>
      <div className="input-group">
        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender" onChange={genderHandler} value={gender}/>
      </div>
      <div className="input-group">
        <label htmlFor="id">ID No:</label>
        <input type="number" id="phone" onChange={phoneHandler} value={phone}/>
      </div>

      <button type="submit" className="sub-btn">Submitted</button>
    </form>
    </>
  );
};


export default StudentForm;
