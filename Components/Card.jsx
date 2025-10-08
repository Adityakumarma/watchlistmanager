import React from "react";
import { Link } from "react-router-dom";

function Card({ show, onDelete, onToggleWatched }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card bg-dark text-white shadow-sm border-success">
        <div className="card-body">
          <h5 className="card-title text-success">{show.title}</h5>
          <p className="card-text mb-1"><strong>Year:</strong> {show.year}</p>
          <p className="card-text mb-1"><strong>Genre:</strong> {show.genre}</p>
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
              onClick={() => onToggleWatched(show.id)}
            >
              {show.watched ? "Mark Unwatched" : "Mark Watched"}
            </button>
            <Link to={`/edit`} className="btn btn-outline-success btn-sm">
              Edit
            </Link>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => onDelete(show.id)}
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
