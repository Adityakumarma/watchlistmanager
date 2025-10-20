import React, { useEffect, useState } from "react";
import { getShowAPI, updateShowAPI } from "../Service/allAPI";
import { useNavigate, useLocation } from "react-router-dom";
import Form from "../Components/Form";
import Swal from 'sweetalert2'

function Editshow() {
  const [initialData, setInitialData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const showId = location.state?.showId;

  useEffect(() => {
    if (!showId) return;
    const fetchShow = async () => {
      try {
        const res = await getShowAPI(showId);
        setInitialData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShow();
  }, [showId]);

  const handleUpdate = async (data) => {
    try {
      await updateShowAPI(showId, data);
         Swal.fire({
        title: "Watchlist Updated Successfully!",
        icon: "success"
      });
      navigate("/watchlist");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to update show");
    }
  };

  if (!showId) {
    return <div className="text-center text-light">No show selected to edit.</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center text-success mb-4">✏️ Edit Show</h2>
      {initialData && <Form onSave={handleUpdate} initialData={initialData} />}
    </div>
  );
}

export default Editshow;
