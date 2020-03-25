import React, { useState } from "react";
import Form from "./Form";

import "./App.css";

function App() {
  const [teamList, setTeamList] = useState([]);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    role: ""
  });
  const onInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    console.log(formData);
  };
  

  const submitForm = event => {
    const displayList = {
      ...formData,
      id: new Date(),
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      role: formData.role,
    }
    setTeamList([...teamList, displayList]);
    setFormData({
      fname: "",
      lname: "",
      email: "",
      role: ""
    })
    event.preventDefault();

    console.log(displayList);
    // console.log(formData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form
          onInputChange={onInputChange}
          formData={formData}
          submitForm={submitForm}
        />
      </header>
      <h3>Team List</h3>
      {
        teamList.map(tl => (<div key={tl.id}>{tl.fname} {tl.lname} {tl.email} {tl.role}
        </div>))
      }

     
    </div>
  );
}

export default App;
