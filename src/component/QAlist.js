import React from "react";
import { Accordion, Row } from "react-bootstrap";
import { question } from "../Data";
const Qalist = ({ data, deleteoneitem }) => {
	const datalocal = JSON.parse(localStorage.getItem("items"));

	const ondeleteitem = (ID) => {
		if (localStorage.getItem("items") != null) {
			const index = question.findIndex((item) => item.id === ID);
			question.splice(index, 1);
			deleteoneitem(question);
		}
	};
	return (
		<Row>
			<Accordion>
				{localStorage.getItem("items") != null ? (
					datalocal.map((item, index) => {
						return (
							<Accordion.Item key={index} eventKey={item.id}>
								<Accordion.Header>
									<div className="m-auto">{item.q}</div>
								</Accordion.Header>
								<Accordion.Body className="">
									<div className="px-3 d-inline">{item.a}</div>
									<button
										onClick={() => {
											ondeleteitem(item.id);
										}}
										className="btn-color"
									>
										delete
									</button>
								</Accordion.Body>
							</Accordion.Item>
						);
					})
				) : (
					<h2 className="fs-1 my-2">There is no data</h2>
				)}
			</Accordion>
		</Row>
	);
};

export default Qalist;
