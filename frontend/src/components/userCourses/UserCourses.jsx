import "./userCourses.css";
import { StoreContext } from "../../store/StoreProvider";
import { useContext } from "react";
import Course from "../Homepages/Course";
import { useNavigate } from "react-router-dom";
const UserCourses = () => {
  const { user, courses } = useContext(StoreContext);
  const navigation = useNavigate();
  let money = 0;
  const moneyInCourses =
    user &&
    courses
      .filter((course) => user.courses.includes(course.id))
      .map((course) => (money += Number(course.price)));
  const showCondition = user
    ? courses
        .filter((course) => user.courses.includes(course.id))
        .map((course) => (
          <Course key={course.id} {...course} alreadyBought={true} />
        ))
    : null;
  if (!user) navigation("/", { replace: true });
  return (
    <>
      <section className="userCoursesSection">
        <p className="course">Wydales na kursy {money.toFixed(2)} zl</p>
        <div className="courses-container">{showCondition}</div>
      </section>
    </>
  );
};

export default UserCourses;
