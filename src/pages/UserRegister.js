import React, { useState } from "react";
import './UserRegister.css';
const UserRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    gender: "",
    dob: "",
    course: {
      english: false,
      math: false,
      science: false,
      history: false,
    },
  });
    const [err, setErr] = useState(false);
    const [mess, setMess] = useState("");
    const handleChange = (e) => {
    setErr(false);
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        course: {
          ...formData.course,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    if (formData.password !== formData.password2) {
        setErr(true);
        setMess("Password Should be same!");
        return;
    }
    console.log(formData);
  };

  return (
    <div className="register-page">
      {err && <h4 style={{color:"red"}}>mess</h4>}
      <h2>User Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={formData.gender === "male"}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={formData.gender === "female"}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
              checked={formData.gender === "other"}
            />{" "}
            Other
          </label>
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Course:</label>
          <label>
            <input
              type="checkbox"
              name="english"
              onChange={handleChange}
              checked={formData.course.english}
            />{" "}
            English
          </label>
          <label>
            <input
              type="checkbox"
              name="math"
              onChange={handleChange}
              checked={formData.course.math}
            />{" "}
            Math
          </label>
          <label>
            <input
              type="checkbox"
              name="science"
              onChange={handleChange}
              checked={formData.course.science}
            />{" "}
            Science
          </label>
          <label>
            <input
              type="checkbox"
              name="history"
              onChange={handleChange}
              checked={formData.course.history}
            />{" "}
            History
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegister;
