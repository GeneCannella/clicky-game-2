import React from "react";
import "./Title.css";

const Title = props => (

	<div className="title">
		<h1>Friends List</h1>
		<p>Score = </p>{props.score}
	</div>

	)
export default Title;
