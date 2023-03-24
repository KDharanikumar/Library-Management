import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
	return (
		<section>
			<div className="container dashboard p-0 ">
				<div className="row">
					<div className="d-flex align-items-center justify-content-center">
						<Link to="/portal/add-book" className="sf-button me-5 d-flex justify-content-center align-items-center">
							ADD BOOKS
						</Link>
						<Link className="sf-button d-flex justify-content-center align-items-center" to="/portal/bookscorner">
							<span>BOOKS STORE</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Dashboard;
