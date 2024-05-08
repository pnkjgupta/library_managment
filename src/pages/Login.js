import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
  const [loginType, setLoginType] = useState("user");
  const [formData, setFormData] = useState({
    membershipId: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(formData);
  };

  const switchLoginType = () => {
    setLoginType(loginType === "user" ? "admin" : "user");
  };

  return (
    <div className="login-page">
      <h2>{loginType === "user" ? "User Login" : "Admin Login"}</h2>
      <form onSubmit={handleSubmit}>
        {loginType === "user" ? (
          <div className="form-group">
            <label>Membership ID:</label>
            <input
              type="text"
              name="membershipId"
              value={formData.membershipId}
              onChange={handleInputChange}
            />
          </div>
        ) : (
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={switchLoginType}>
        Switch to {loginType === "user" ? "Admin" : "User"} Login
      </button>
      {loginType === "user" && (
        <p>
          Not registered?{" "}
          <Link to="/">
            Register here
          </Link>
        </p>
      )}
    </div>
  );
};

export default Login;
