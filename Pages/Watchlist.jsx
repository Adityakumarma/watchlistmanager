import React, { useState, useEffect } from "react";
import Card from "/Components/Card";

function Watchlist() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("shows")) || [];
    setShows(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = shows.filter((s) => s.id !== id);
    setShows(updated);
    localStorage.setItem("shows", JSON.stringify(updated));
  };

  const handleToggleWatched = (id) => {
    const updated = shows.map((s) =>
      s.id === id ? { ...s, watched: !s.watched } : s
    );
    setShows(updated);
    localStorage.setItem("shows", JSON.stringify(updated));
  };

  const filteredShows = shows
    .filter((s) =>
      s.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "year") return a.year - b.year;
      return 0;
    });

  return (
    <div className="container mt-4">
      <h2 className="text-success text-center mb-4">My Watchlist</h2>
      
      <div className="row">
        {filteredShows.length > 0 ? (
          filteredShows.map((show) => (
            <Card
              key={show.id}
              show={show}
              onDelete={handleDelete}
              onToggleWatched={handleToggleWatched}
            />
          ))
        ) : (
          <p className="text-center text-light">No shows found.</p>
        )}
      </div>
    </div> 
  );
}

export default Watchlist;
