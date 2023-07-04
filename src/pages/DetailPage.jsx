import React from "react";

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

export default function detailsPage(title) {
  const chemist = people.filter((person) => person.profession === "chemist");
  const peoples = people.filter((person) => person.profession !== "chemist");
  return (
    <>  
      <h1>chemist</h1>
      <ul>
        {chemist.map((person) => (
          <li key={person.id}>
            <img alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <h1>everyone else</h1>
      <ul>
        {peoples.map((person) => (
          <li key={person.id}>
            <img alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
