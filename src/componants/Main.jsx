import React from "react";
import chickenTab from "../../chickenTab.json";
import PersonCard from "./PersonCard";
import "./Main.css";

function Main() {
  const teachers = chickenTab.chickenTab.filter(
    (person) => person.position === "Teacher"
  );
  const students = chickenTab.chickenTab.filter(
    (person) => person.position === "Student"
  );

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
      <div className="footer">
        
      </div>
    </main>
  );
}

export default Main;
