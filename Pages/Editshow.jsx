import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "/Components/Form";

function Editshow() {
  const navigate = useNavigate();
  const { id } = useParams();
  const shows = JSON.parse(localStorage.getItem("shows")) || [];
  const showToEdit = shows.find((s) => s.id === Number(id));

  const handleUpdate = (updatedShow) => {
    const updatedShows = shows.map((s) =>
      s.id === Number(id) ? { ...updatedShow, id: Number(id) } : s
    );
    localStorage.setItem("shows", JSON.stringify(updatedShows));
    navigate("/watchlist");
  };

  return (
    <div className="container my-5">
      <h3 className="text-center text-warning mb-4">Edit Show</h3>
      <Form onSubmit={handleUpdate} initialData={showToEdit} />
    </div>
  );
}

export default Editshow;
