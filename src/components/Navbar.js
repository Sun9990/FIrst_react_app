import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {

  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.clear();
    navigate('/login')
  }

  return (
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">FIRST REACT APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        {
        localStorage.getItem('email') ? 
        <>
        <li className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover-item my-3">
        <button className="btn btn-outline-light" type="button"><Link to="/home">Home Page</Link></button>
        </li>
        <li className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover-item my-3">
        <button className="btn btn-outline-light" type="button" ><Link to="/about">About Us</Link></button>
        </li>
        <li className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover-item my-3">
        <button className="btn btn-outline-light" type="button"><Link to="/contactus">Contact Us</Link></button>
        </li>
        <li className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover-item my-3">
        <button className="btn btn-outline-light" type="button"><Link to="/textform">Text Analyzer</Link></button>
        </li>
        </>
        :
        <>
        <li className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover-item my-3">
        <button className="btn btn-outline-light" type="button"><Link to="/signup">Signup</Link></button>
        </li>
        <li className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover-item my-3">
        <button className="btn btn-outline-light" type="button"><Link to="/">Login</Link></button>
        </li>
        </>
        }
        {
          localStorage.getItem('email') ?
        <li className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover-item my-3">
        <button className="btn btn-outline-dark" type="button" onClick={handleLogout}>Logout</button>
        </li>
        : null
      }
      </ul>
      <form className="d-flex" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>

  );
}

Navbar.propTypes = {title: propTypes.string.isRequired,
                    aboutText: propTypes.string
                }

Navbar.defaultProps = {title: "Set title here",
                        aboutText: "About"}

export default Navbar;