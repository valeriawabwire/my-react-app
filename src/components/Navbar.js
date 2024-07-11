
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo-link">
            My Yacht App
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/manage-bookings" className="nav-link">
              Manage Bookings
            </Link>
          </li>
          {loggedIn ? (
            <>
              <li>
                <Link to="/book-yacht" className="nav-link">
                  Book Yacht
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;