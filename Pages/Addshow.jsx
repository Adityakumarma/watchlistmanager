import React from "react";
import {   useNavigate } from "react-router-dom";
import Form from '/Components/Form';



function AddShow() {
  const navigate = useNavigate();

  const handleAdd = (newShow) => {
    const shows = JSON.parse(localStorage.getItem("shows")) || [];
    newShow.id = Date.now();
    shows.push(newShow);
    localStorage.setItem("shows", JSON.stringify(shows));
    navigate("/watchlist");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card bg-dark text-light shadow-lg border-0">
            <div className="card-header text-center bg-success bg-opacity-75 py-3 rounded-top">
              <h3 className="mb-0 fw-bold">🎬 Add a New Show / Movie</h3>
            </div>
            <div className="card-body p-4">
              <Form onSubmit={handleAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddShow;
