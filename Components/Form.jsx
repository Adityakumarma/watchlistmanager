import React, { useState, useEffect } from "react";

function Form({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    genre: "",
    watched: false,
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-dark text-white p-4 rounded shadow-sm">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="form-control bg-secondary text-white border-0"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Year</label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="form-control bg-secondary text-white border-0"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Genre</label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="form-control bg-secondary text-white border-0"
        />
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          name="watched"
          checked={formData.watched}
          onChange={handleChange}
          className="form-check-input"
        />
        <label className="form-check-label">Watched</label>
      </div>
      <button type="submit" className="btn btn-success w-100">
        Save
      </button>
    </form>
  );
}

export default Form;
