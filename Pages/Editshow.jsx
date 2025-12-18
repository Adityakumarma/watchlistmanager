import React, { useEffect, useState } from "react";
import { getShowAPI, updateShowAPI } from "../Service/allAPI";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../Components/Form";
import Swal from "sweetalert2";

function Editshow() {
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id: showId } = useParams();

  useEffect(() => {
    if (!showId) {
      setLoading(false);
      return;
    }

    const fetchShow = async () => {
      try {
        const res = await getShowAPI(showId);
        setInitialData(res.data);
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: "Error",
          text: "Failed to fetch show details",
          icon: "error",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchShow();
  }, [showId]);

  const handleUpdate = async (data) => {
    if (!showId) {
      Swal.fire("Invalid Show", "Show ID missing", "error");
      return;
    }

    try {
      await updateShowAPI(showId, data);
      Swal.fire({
        title: "Watchlist Updated Successfully!",
        icon: "success",
      });
      navigate("/watchlist");
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Update Failed",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
    }
  };

  if (loading) {
    return (
      <div className="text-center text-light my-5">
        Loading show details...
      </div>
    );
  }

  if (!initialData) {
    return (
      <div className="text-center text-danger my-5">
        No show found to edit.
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center text-success mb-4">✏️ Edit Show</h2>
      <Form onSave={handleUpdate} initialData={initialData} />
    </div>
  );
}

export default Editshow;
