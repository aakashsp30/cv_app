import "../styles/Experience.css"

import { useState } from "react";

export default function Experience() {
  const [info, setInfo] = useState({
    name: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });
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
      <section className="cv-section">
        <h2>Experience</h2>
        <p>{info.name}</p>
        <p>{info.position}</p>
        <p className="responsibilities">{info.responsibilities}</p>
        <p>{info.from}</p>
        <p>{info.to}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </section>
    );
  }

  return (
    <section className="cv-section experience">
      <h2>Experience</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={info.name}
          onChange={handleChange}
          placeholder="Company Name"
        />
        <input
          name="position"
          value={info.position}
          onChange={handleChange}
          placeholder="Position Title"
        />
        <textarea
          name="responsibilities"
          value={info.responsibilities}
          onChange={handleChange}
          placeholder="Main Responsibilities"
        />
        <input
          name="from"
          value={info.from}
          onChange={handleChange}
          placeholder="From"
        />
        <input
          name="to"
          value={info.to}
          onChange={handleChange}
          placeholder="To"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
