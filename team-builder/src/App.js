import React, { useState } from "react";
import Form from "./Form";

import "./App.css";

function App() {
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
  const [teamList] = useState([]);

  const submitForm = event => {
    teamList.push(formData);
    setFormData({
      fname: "",
      lname: "",
      email: "",
      role: ""
    });

    event.preventDefault();

    console.log(teamList);
    console.log(formData);
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
     
    </div>
  );
}

export default App;
