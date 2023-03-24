import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navigation() {
	let navigate = useNavigate();
	let logout = () => {
		navigate("/");
	};
	return (
		<nav className=" container-fluid p-3 shadow fixed-top navbar navbar-light bg-white " style={{ position: "sticky" }}>
			<div className="container p-0">
				<Link to="/portal/dashboard" className="navbar-brand">
					LIBRARY MANAGEMENT
				</Link>
				<div className="d-flex justify-content-center align-items-center text-center" id="navbarSupportedContent">
					<Link className="nav-link me-4" to="/portal/dashboard">
						DASHBOARD
					</Link>
					<Link className="nav-link" to="/portal/library">
						LIBRARY
					</Link>
				</div>
				<button onClick={logout} className="sf-button" type="submit">
					LOGOUT
				</button>
			</div>
		</nav>
	);
}

export default Navigation;
