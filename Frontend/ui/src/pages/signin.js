import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router";
function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault(); 
    console.log(form,'formData')
    try {
           const res=await axios.post('http://localhost:3001/api/v1/user/signin', {
     
        email: form.email,
        password: form.password
      
    })
    console.log(res,'res')
    // const {success,user}=axios.post(`basr_url/signin`,form);
    if (res.data.success) {
      // Handle successful login, e.g., redirect to dashboard
      console.log("Login successful", 'user');
      navigate('/shiftmanagement')
    //   alert("Login successful");
    
    } 
    } catch (error) {
          setError("Invalid email or password");
    }
 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example validation
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    // TODO: Add your sign-in logic here (API call, etc.)
    alert("Signed in!");
  };

  return (
    <div className="signin container mt-5" style={{ maxWidth: "400px" }}>
        <div className="text-center mb-4">
            <img src="https://www.bayer.in/themes/custom/bayer_cpa/logo.svg" alt="Bayer Logo" className="img-fluid" style={{ maxWidth: "150px" }} />
        </div>
      <h2 className="mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
            autoComplete="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            autoComplete="current-password"
          />
        </div>
        <button type="submit" onClick={handleLogin} className="btn btn-primary w-100">
          Login
        </button>
        <a href="/forgot-password" className="d-block mt-3 text-center">
          Forgot Password?      
        </a>
        <a href="/signup" className="d-block mt-3 text-center">
          Don't have an account? Sign Up   
        </a>
      </form>
    </div>
  );
}

export default SignIn;