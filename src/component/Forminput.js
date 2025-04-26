import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { question } from "../Data";
const Forminput = ({ onadd, notify }) => {
	const [qu, setqu] = useState("");
	const [an, setan] = useState("");

	const addnewitem = () => {
		if (qu === "" || an === "") {
			notify("please enter the data", "Error");
			return;
		}
		question.push({ id: Math.random(), q: qu, a: an });
		setqu("");
		setan("");
		onadd();
		console.log(question);
	};
	return (
		<Row className="my-3">
			<Col sm="5">
				<Form.Control
					value={qu}
					onChange={(e) => setqu(e.target.value)}
					type="text"
					placeholder="Enter Qestion"
				/>
			</Col>
			<Col sm="5">
				<Form.Control
					value={an}
					onChange={(e) => setan(e.target.value)}
					type="text"
					placeholder="Enter Answer"
				/>
			</Col>
			<Col sm="2">
				<button
					onClick={addnewitem}
					className="btn-color w-100"
					type="submit"
				>
					Submit
				</button>
			</Col>
		</Row>
	);
};

export default Forminput;
