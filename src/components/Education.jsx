import "../styles/Education.css"

import { useState } from "react";

export default function Education() {
  const [info, setInfo] = useState({ name: "", title: "", date: "" });
  const [isEditing, setIsEditing] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  }

  if (!isEditing) {
    return (
      <section className="cv-section education">
        <h2>Education</h2>
        <p>{info.name}</p>
        <p>{info.title}</p>
        <p>{info.date}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </section>
    );
  }

  return (
    <section className="cv-section">
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={handleChange}
          value={info.name}
          placeholder="School Name"
        />
        <input
          name="title"
          onChange={handleChange}
          value={info.title}
          placeholder="Title of Study"
        />
        <input
          name="date"
          onChange={handleChange}
          value={info.date}
          placeholder="Date of Study"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
