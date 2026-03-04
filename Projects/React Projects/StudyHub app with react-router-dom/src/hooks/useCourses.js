import { html, css, js } from "../assets";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

import { saveCoursesToStorage } from "../utils/storage";

function useCourses() {
  const { user } = useAuth();
  const [courses, setcourses] = useState(() => {
    let saved = localStorage.getItem("courses");
    if (saved) {
      return JSON.parse(saved)
    }
    else {
      return [
        // These are initial values, given only first time the ui loads.
        {
          src: html,
          id: 1,
          title: "HTML Basics",
          courseDiscription: "Learn the fundamental of HTML.",
          enrolled: false,
        },
        {
          src: css,
          id: 2,
          title: "CSS Mastery",
          courseDiscription: "Master the art of styling with CSS.",
          enrolled: false,
        },
        {
          src: js,
          id: 3,
          title: "JS Advanced",
          courseDiscription: "Advanced JavaScript techniques.",
          enrolled: false,
        },
      ];
    }
  });
  const enrolledCourse = courses.filter((course) => {
    return course.enrolled === true;
  });

  const enrollCourse = (courseId) => {
    // Here we're looping on previous courses, when a course.id match with the enrolled course.id, we're setting that course's enrolled value false to true. if any course.id doesn't match, we're returning that as that was.
    setcourses((prev) => {
      return prev.map((course) => {
        if (courseId === course.id) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
    });
  };

  // Remove Courses from localStorage if user doesn't exist.
  if (!user) {
    localStorage.removeItem("courses");
    localStorage.removeItem("enrolledCourse");
  }

  useEffect(() => {
    // Save courses in localStorage in every change
    saveCoursesToStorage(courses);
  }, [courses]);


  // Courses size array for skeleton
  const courseItemsBox = [];
  for (let i = 1; i <= courses.length; i++) {
    courseItemsBox.push(i);
  }

  // Enrolled courses size array for skeleton
  const EnrolledCourseItemsBox = [];
  for (let i = 1; i <= enrolledCourse.length; i++) {
    EnrolledCourseItemsBox.push(i);
  }

  return {
    courses,
    enrollCourse,
    enrolledCourse,
    courseItemsBox,
    EnrolledCourseItemsBox,
};
}

export default useCourses;
