import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import "../css/about.css";

const About = () => {

	const [data,setData] = useState([])
 	
	 useEffect(() =>{
		axios.get('http://127.0.0.1:5000/convert_to_json3')
		.then(res => setData(res.data))
		.catch(err => console.log(err))
	},[])

  return (
<>
	<div>
	   <table>
	   <h1 className="text-center">COFFEE SAMPLES</h1>
   		<div className="container">
   			<table className="table table-bordered">
    			<thead className="table-dark">
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Description</th>
						<th scope="col">Ingredients</th>
						<th scope="col">Image</th>
					</tr>
					</thead>
					<tbody>
					{
						data.map((values,index) => {
							return (
							<tr key = {index}>
							<td>{values.title}</td> 
							<td>{values.description}</td>
							<td>{values.ingredients}</td>
							<td><img src={values.image} alt="coffee"/></td>
				      </tr>
						)}
						)
					}
					</tbody>
					</table> 
					</div>
					</table>
					</div>

					</>
  );

}

export default About;
