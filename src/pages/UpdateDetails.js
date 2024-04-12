
import '../index.css'
import React, { useContext, useState } from 'react';
import { valueContext } from '../App';

const UpdateDetails = () => {
  const { dataValue, setDataValue } = useContext(valueContext);

  const [formData, setFormData] = useState({
    name: dataValue.name,
    email: dataValue.email,
    mobile: dataValue.mobile,
    password: dataValue.password,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataValue({
      ...dataValue,
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      password: formData.password,
    });
    alert('User details updated successfully!');
  };

  return (<>
    <div className="page " >
    
      <div className="form-container">
      <h1>Update Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile No.</label>
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
          Update Details
        </button>
      </form>
    </div>
    </div>
    
    </>
  );
};

export default UpdateDetails;

