import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteShowAPI, updateShowAPI } from "../Service/allAPI";

function Card({ show, refreshList }) {
  const navigate = useNavigate();

  
  const toggleWatched = async () => {
    try {
      await updateShowAPI(show.id, { ...show, watched: !show.watched });
      refreshList(); 
    } catch (error) {
      console.error(error);
      alert("❌ Failed to update status");
    }
  };

  // Delete show
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this show?")) {
      try {
        await deleteShowAPI(show.id);
        refreshList();
      } catch (error) {
        console.error(error);
        alert("❌ Failed to delete show");
      }
    }
  };

  
  const handleEdit = () => {
    navigate("/edit", { state: { showId: show.id } });
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card bg-dark text-white shadow-sm border-success h-100">
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title text-success">{show.title}</h5>
            <p className="card-text mb-1"><strong>Year:</strong> {show.year}</p>
            <p className="card-text mb-1"><strong>Genre:</strong> {show.genre || "N/A"}</p>
            <p className="card-text">
              <strong>Status:</strong>{" "}
              {show.watched ? (
                <span className="text-success">Watched ✅</span>
              ) : (
                <span className="text-warning">Not Watched ⏳</span>
              )}
            </p>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-primary btn-sm" onClick={toggleWatched}>
              {show.watched ? "Mark Unwatched" : "Mark Watched"}
            </button>
            <button className="btn btn-outline-success btn-sm" onClick={handleEdit}> 
  Edit
</button>

            <button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
