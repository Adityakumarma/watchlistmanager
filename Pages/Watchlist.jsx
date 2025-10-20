import React, { useEffect, useState } from "react";
import { getAllShowsAPI } from "../Service/allAPI";
import Card from "../Components/Card";

function Watchlist() {
  const [shows, setShows] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); 

  // Fetch all shows from API
  const fetchShows = async () => {
    try {
      const res = await getAllShowsAPI();
      setShows(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  
  const filteredShows = shows.filter((show) => {
    const matchesSearch =
      show.title.toLowerCase().includes(searchText.toLowerCase()) ||
      (show.genre && show.genre.toLowerCase().includes(searchText.toLowerCase()));

    const matchesFilter =
      filterStatus === "all" ||
      (filterStatus === "watched" && show.watched) ||
      (filterStatus === "unwatched" && !show.watched);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container my-5">
      <h2 className="text-center text-success mb-4">🎬 My Watchlist</h2>

      {/* Search and Filter */}
      <div className="d-flex flex-wrap justify-content-between mb-4 gap-2">
        <input
          type="text"
          className="form-control"
          placeholder=" Search by title or genre..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ maxWidth: "900px" }}
        />
        <select
          className="form-select"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{ maxWidth: "200px" }}
        >
          <option value="all">All</option>
          <option value="watched">Watched</option>
          <option value="unwatched">Unwatched</option>
        </select>
      </div>

      {/* Watchlist Cards */}
      <div className="row g-4">
        {filteredShows.length > 0 ? (
          filteredShows.map((show) => (
            <Card key={show.id} show={show} refreshList={fetchShows} />
          ))
        ) : (
          <p className="text-center text-light">No shows found.</p>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
