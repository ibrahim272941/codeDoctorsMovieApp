import './ModalLogin.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { signInWithGoogle, singInUser } from '../../auth/getAuth';

const ModalLogin = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleGoogle = () => {
    signInWithGoogle();
  };
  const handleSubmit = () => {
    singInUser(email, password);
  };

  return (
    <>
      <Button className="modalButton" variant="danger" onClick={handleShow}>
        More Info
      </Button>

      <Modal className="modalContainer" show={show} onHide={handleClose}>
        <Modal.Header className="modalLogin" closeButton>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgb(202,99,9)',
              marginRight: '2rem',
            }}
          >
            Please Login
          </p>
          <p className="info">
            Don't you have an account?
            <Link className="link" to="/register">
              Register Page
            </Link>
          </p>
        </Modal.Header>
        <Modal.Body className="modalLogin">
          <Form className="formGroup">
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modalLogin buttonGroupModal">
          <Button className="w-25 modalButtonLogin" onClick={handleGoogle}>
            Sign In
            <Icon
              className="google-icon"
              icon="logos:google-icon"
              color="#f5c518"
              width="20"
            />
          </Button>
          <Button className="w-25 modalButtonLogin" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalLogin;
