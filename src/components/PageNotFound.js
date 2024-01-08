import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
	<div className="container">
		<h1>404 Error</h1>
		<h1>Page Not Found</h1>
		<button className="btn btn-outline-light" type="submit"><Link to="/login"> Go Back To Login Page</Link></button>
	</div>
  );
}

export default PageNotFound;
