import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: ""
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form Submitted!"); // 👈 This will show immediately
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input
        placeholder="enter your full name"
        type="text"
        id="fullname"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
      />

      <br /><br />

      <label htmlFor="username">User Name</label>
      <input
        placeholder="enter user name"
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />

      <br /><br />

      <label htmlFor="password">Password</label>
      <input
        placeholder="enter password"
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}
