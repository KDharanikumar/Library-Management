import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center mt-5 p-5">
            <Link to="/portal/add-book" className="sf-button me-5 d-flex justify-content-center align-items-center">
              Add Books
            </Link>
            <Link className="sf-button d-flex justify-content-center align-items-center" to="/portal/bookscorner">
              <span>Books Store</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
