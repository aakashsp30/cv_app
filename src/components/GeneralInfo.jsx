import "../styles/GeneralInfo.css"

import { useState } from "react";

export default function GeneralInfo() {
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  if (!isEditing) {
    return (
      <section className="cv-section general-info">
        <h2>General Information</h2>
        <p>{info.name}</p>
        <p>{info.email}</p>
        <p>{info.phone}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </section>
    );
  }
  return (
    <section className="cv-section">
      <h2>General Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={info.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={info.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={info.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
