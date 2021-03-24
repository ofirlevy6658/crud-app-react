import React from "react";
import { Link } from "react-router-dom";

import "../style/card.css";
const Card = ({ name, img, phone, id }) => {
	return (
		<div className="card">
			<img src={img} alt="person" />
			<h4>{name}</h4>
			<p>{phone}</p>
			<Link to={`users/${id}`}>Edit</Link>
		</div>
	);
};

export default Card;
