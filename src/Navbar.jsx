import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Navigation() {
  let navigate = useNavigate();
  let logout = () => {
    navigate("/");
  };
  return (
    <nav className=" container-fluid p-4 shadow fixed-top navbar navbar-light bg-white " style={{ position: "sticky" }}>
      <div className="container px-4 px-lg-5">
        <h1 className="navbar-brand fw-bold">LIBRARY MANAGEMENT</h1>
        <div className="d-flex justify-content-center p-2" id="navbarSupportedContent">
          <Link className="nav-link me-4" to="/portal/dashboard">
            <h6>DASHBOARD</h6>
          </Link>
          <Link className="nav-link" to="/portal/library">
            <h6>LIBRARY</h6>
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
