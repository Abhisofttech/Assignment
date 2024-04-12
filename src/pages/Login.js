import '../index.css'
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { valueContext } from '../App';
const Login = () => {
  const { dataValue } = useContext(valueContext);

  const [formData, setFormData] = useState({ mobile: '', password: '' });
  const history = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { mobile, password } = formData;
    if (mobile === dataValue.mobile && password === dataValue.password) {

      alert("success")


      setFormData({ mobile: '', password: '' });
      history('/dashboard');

    } else {
      alert('Invalid mobile number or password. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <button type="submit" className="btn btn-primary ms-2 ">
          <Link to="/" className="Nav-link text-white">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
