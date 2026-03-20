import { useState } from "react";
import axios from "axios";

export default function ReviewForm({ movieId, afterFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    text: "",
    vote: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/movies/${movieId}/review`, formData)
      .then(() => {
        afterFormSubmit();
        setFormData({ name: "", text: "", vote: "" });
      });
  }

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>Aggiungi recensione</h3>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="name">Nome</label>
          <input
            value={formData.name}
            onChange={handleInputChange}
            name="name"
            className="form-control"
            type="text"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text">Testo</label>
          <textarea
            value={formData.text}
            onChange={handleInputChange}
            name="text"
            className="form-control"
            id="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="vote">Voto</label>
          <input
            value={formData.vote}
            onChange={handleInputChange}
            name="vote"
            className="form-control"
            type="number"
            id="vote"
          />
        </div>
        <button onClick={handleFormSubmit} className="btn btn-success">
          Invia recensione
        </button>
      </div>
    </div>
  );
}
