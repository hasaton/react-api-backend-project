import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Course from "./Course";
import "./CoursesPage.css";
const CoursesPage = () => {
  const { courses } = useContext(StoreContext);

  const showCondition = courses
    ? courses.map((course) => <Course key={course.id} {...course} />)
    : null;
  return (
    <>
      <h1 className="courses-heading">Poznaj nasza oferte kursow!</h1>
      <div className="courses-container">{showCondition}</div>
    </>
  );
};

export default CoursesPage;
