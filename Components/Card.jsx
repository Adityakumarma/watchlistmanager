import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="col-md-4 mb-4">
      <div className="card bg-dark text-white shadow-sm border-success">
        <div className="card-body">
          <h5 className="card-title text-success">{}</h5>
          <p className="card-text mb-1"><strong>Year:</strong> {}</p>
          <p className="card-text mb-1"><strong>Genre:</strong> {}</p>
          <p className="card-text">
            <strong>Status:</strong>{" "}
            {show.watched ? (
              <span className="text-success">Watched ✅</span>
            ) : (
              <span className="text-warning">Not Watched ⏳</span>
            )}
          </p>
          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-outline-primary btn-sm"
              
            >
              {show.watched ? "Mark Unwatched" : "Mark Watched"}
            </button>
            <Link to={`/edit`} className="btn btn-outline-success btn-sm">
              Edit
            </Link>
            <button
              className="btn btn-outline-danger btn-sm"
              
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
