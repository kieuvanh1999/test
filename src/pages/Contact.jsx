import React from "react";
import { useState } from "react";

const professers = [
  {
    id: 1,
    name: "Creola Katherine Johnson: mathematician",
  },
  {
    id: 2,
    name: "Mario José Molina-Pasquel Henríquez: chemist",
  },
  {
    id: 3,
    name: "Mohammad Abdus Salam: physicist",
  },
  {
    id: 4,
    name: "Percy Lavon Julian: chemist",
  },
  {
    id: 5,
    name: "Subrahmanyan Chandrasekhar: astrophysicist",
  },
];

export default function Contact() {
  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    setChecked((prev) => {
      const ischecked = checked.includes(id);
      if (ischecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleChoose = () => {
    console.log({ ids: checked });
  };

  const people = professers.filter((person) => person.id === checked)

  return (
    <>
      <div style={{ textAlign: "left" }}>
        {professers.map((professer) => (
          <div key={professer.id}>
            <input
              type="checkbox"
              checked={checked.includes(professer.id)}
              onChange={() => handleCheck(professer.id)}
            />
            {professer.name}
          </div>
        ))}
        <button onClick={handleChoose} type="submit">
          Choose
        </button>
        {people.map((peoples) => (
          <div key={peoples.id}>
            {peoples.name}
          </div>
        ))}
      </div>
    </>
  );
}
