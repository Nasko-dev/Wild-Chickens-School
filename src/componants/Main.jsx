import React from "react";
import PersonCard from "./PersonCard";
import "./Main.css";
import { useState, useEffect } from "react";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://wild-chicken-api.netlify.app/chickens")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const teachers = data.filter((person) => person.position === "Teacher");
  const students = data.filter((person) => person.position === "Student");

  return (
    <main>
      <div className="Teacher">
        <h1>Equipe pédagogique</h1>
        <div className="card-container">
          {teachers.map((teacher) => (
            <PersonCard
              key={teacher.id}
              name={teacher.name}
              imgSrc={teacher.imgSrc}
              position={teacher.position}
              biography={teacher.biography}
            />
          ))}
        </div>
      </div>

      <div className="Student">
        <h2>Camarades</h2>
        <div className="card-container">
          {students.map((student) => (
            <PersonCard
              key={student.id}
              name={student.name}
              imgSrc={student.imgSrc}
              position={student.position}
              biography={student.biography}
            />
          ))}
        </div>
      </div>
      <div className="footer"></div>
    </main>
  );
}

export default Main;
