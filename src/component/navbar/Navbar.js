import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../auth/firebase-config';

const Navbar = () => {
  let path = useLocation().pathname;
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const signOutFunc = async () => {
    await signOut(auth);
    navigate('/');
  };
  return (
    <div className="navbar">
      <div className="title">
        <Link
          style={{ textDecoration: 'none' }}
          to={`${path === '/' ? '/comments' : '/'}`}
        >
          <div className="h1">
            Movie<span>DataBase</span>
            {currentUser && path === '/' && <h6>Comment Page</h6>}
            {currentUser && path === '/comments' && <h6>Home Page</h6>}
          </div>
        </Link>
      </div>
      {currentUser ? (
        <div className="logout">
          <h6>{currentUser.displayName}</h6>

          {currentUser && <button onClick={signOutFunc}>Logout</button>}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
