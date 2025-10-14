import React from "react";
import Card from "/Components/Card";

function Watchlist() {


  

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
