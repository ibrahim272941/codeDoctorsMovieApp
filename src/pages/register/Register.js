import './Register.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { createUser } from '../../auth/getAuth';

let userInfo = {
  name: '',
  lastName: '',
  email: '',
  password: '',
};

const Register = () => {
  const [initialValue, setValue] = useState(userInfo);
  const { name, lastName, email, password } = initialValue;
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${name} ${lastName}`;
    createUser(email, password, displayName);
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name, ':', value);
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  console.log(initialValue);
  return (
    <div className="register">
      <Form onSubmit={handleSubmit} className="form">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            onChange={handleChange}
            value={name}
            type="text"
            placeholder=" Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            onChange={handleChange}
            value={lastName}
            type="text"
            placeholder="Enter your last name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onChange={handleChange}
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={handleChange}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <div className="buttonRegister">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
