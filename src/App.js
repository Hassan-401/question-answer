import { Col, Container, Row } from "react-bootstrap";
import Forminput from "./component/Forminput";
import Qalist from "./component/QAlist";
import { question } from "./Data";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [data, setdata] = useState(question);
	const additem = () => {
		localStorage.setItem("items", JSON.stringify([...question]));
		setdata([...question]); // اعرضها زي م هي بقيمها القديمه
		notify("added successfully", "Success");
	};

	const deleteallitems = () => {
		localStorage.removeItem("items");
		question.splice(0, question.length);
		setdata([]);
		notify("deleted successfully", "Success");
	};
	const deleteoneitem = (items) => {
		localStorage.setItem("items", JSON.stringify([...items]));
		setdata([...items]);
		if (items <= 0) {
			deleteallitems();
		}
		notify("deleted successfully", "Success");
	};
	const notify = (message, type) => {
		if (type === "Error") {
			toast.error(message);
		} else if (type === "Success") {
			toast.success(message);
		}
	};
	return (
		<div className="font color-body text-center">
			<Container className="py-5">
				<Row className="justify-content-center">
					<Col sm="4">
						<div className="fs-3 text-center py-2">
							Commen Qustions & Answers
						</div>
					</Col>
					<Col sm="8">
						<Forminput onadd={additem} notify={notify}/>
						<Qalist data={data} deleteoneitem={deleteoneitem} />
						{localStorage.getItem("items") != null ? (
							<button
								onClick={deleteallitems}
								className="btn-color w-100 my-3"
							>
								Delete All
							</button>
						) : null}
					</Col>
				</Row>
				<ToastContainer />
			</Container>
		</div>
	);
}

export default App;
