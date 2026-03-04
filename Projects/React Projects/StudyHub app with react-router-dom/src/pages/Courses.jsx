import {
  CourseCard,
  CoursesSkeleton
} from "../components";
import {
  useCourses,
  useLoading,
  useAuth
} from "../hooks";
import {
  useNavigate,
  useLocation
} from "react-router-dom";

function Courses() {
  const loading = useLoading(500);
  const { courses, enrollCourse, courseItemsBox } = useCourses();
  
  const { user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation()

  function enrollHandler(courseId) {
    if (!user) {
      navigate("/login", {
        state: {from: location.pathname}
      });
    } else {
      enrollCourse(courseId);
    }
  }

  // Display loading...
  if (loading) {
    return <CoursesSkeleton coursesBox={courseItemsBox} />;
  }

  return (
    <div className="w-full lg:h-[calc(100%-4.5rem)] flex flex-col bg-[#f5f5f5] justify-center items-center relative transition-all duration-500">
      <div className="lg:w-3/5 lg:h-4/5 flex flex-col justify-center items-center absolute top-3">
        <h1 className="text-2xl lg:text-5xl font-semibold">Our Courses</h1>
        <h2 className="lg:my-4 lg:font-semibold">
          Explore and enroll in our courses.
        </h2>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-6 mt-5">
          {courses.map((course) => {
            return (
              <CourseCard
                key={course.id}
                id={course.id}
                src={course.src}
                courseTitle={course.title}
                courseDescrip={course.courseDiscription}
                hasBtn={true}
                isEnrolled={course.enrolled}
                enrollHandler={() => enrollHandler(course.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses;
