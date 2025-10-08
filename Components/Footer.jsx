import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5 pt-3">
      <div className="container">
        <p className="mb-1 ">🎬 <strong>My Watchlist</strong> — Manage your favorite movies & TV shows</p>
        <p className="mb-0">
          ©  <span className="text-success fw-semibold">Developed by Watchlist Manager</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;