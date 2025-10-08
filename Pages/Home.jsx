import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div
      className="text-light d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage:
          "url('https://singh-cp.github.io/netflix-landingpage/images/netflix-background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
      }}
    >
      <div className="bg-dark bg-opacity-75 p-5 rounded-4 shadow-lg">
        <h1 className="display-4 fw-bold mb-3 text-warning ">
          🎬 Welcome to <span className="text-success">My Watchlist</span>
        </h1>
        <p className=" mb-4 text-light ">
          Your personal collection of TV shows and movies — organized, sorted, and ready to binge!
        </p>

        <div className="d-flex justify-content-center gap-3 mt-4">
          <Link
            to="/addshow"
            className="btn btn-success btn-lg px-4 shadow-sm fw-semibold"
          >
            ➕ Add New Show
          </Link>
          <Link
            to="/watchlist"
            className="btn btn-outline-warning btn-lg px-4 fw-semibold"
          >
            📺 View Watchlist
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
