
import '../index.css';
import React, { useState, useContext } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { valueContext } from '../App';

const Register = () => {
  const { dataValue, setDataValue } = useContext(valueContext);

  const [errors, setErrors] = useState({});
  const history = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    let error = '';

    switch (name) {
      case 'email':
        error = validateEmail(value) ? '' : 'Invalid email address';
        break;
      case 'mobile':
        error = validateMobile(value) ? '' : 'Mobile number must be numeric and 10 digits';
        break;
      case 'password':
        error = validatePassword(value)
          ? ''
          : 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setDataValue((prevData) => ({
      ...prevData,
      picture: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(errors).every((error) => error === '')) {
      console.log(dataValue); 
      alert('You have registered successfully. Now you can login.');
      history('/dashboard');
    } else {
      console.log('Form has validation errors');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateMobile = (mobile) => {
    const re = /^[0-9]{10}$/;
    return re.test(mobile);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    return re.test(password);
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={dataValue.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={dataValue.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile No.</label>
          <input
            type="text"
            className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
            id="mobile"
            name="mobile"
            value={dataValue.mobile}
            onChange={handleChange}
            required
          />
          {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            id="password"
            name="password"
            value={dataValue.password}
            onChange={handleChange}
            required
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="picture">Profile Picture</label>
          <input
            type="file"
            className="form-control-file"
            id="picture"
            accept="image/*"
            onChange={handleFileChange}
            
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <button type="submit" className="btn btn-primary ms-2 ">
          <Link to="/login" className="Nav-link text-white">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Register;

