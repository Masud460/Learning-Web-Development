import {
  useEffect,
  useState
} from "react";
import {
  CourseCard,
  DashboardSkeleton
 } from "../components";
import {
  useCourses,
  useLoading,
  useAuth
} from "../hooks";


function Dashboard() {
  const loading = useLoading(500);
  const { user } = useAuth();
  const { enrolledCourse, EnrolledCourseItemsBox} = useCourses();

  // Check user enrolled any course or not for displaying enrolled course when user enrolled any course, and for displaying empty state.
  const [hasCourse, setHasCourse] = useState(false);
  useEffect(() => {
    if (enrolledCourse.length === 0) {
      setHasCourse(false);
    } else {
      setHasCourse(true);
    }
  }, [enrolledCourse]);

  // Display loading...
  if (loading) {
    return <DashboardSkeleton coursesBox={EnrolledCourseItemsBox} />;
  }

  return (
    <div className="flex justify-center items-center h-[416px] lg:h-[716.44px]">
      <div className="w-4/5 lg:w-3/5 h-4/5">
        <h1 className="text-center text-2xl lg:text-5xl font-semibold ">
          Dashboard
        </h1>
        <div className="w-full h-[2px] bg-gray-100 mt-2 mb-3 lg:mt-4 lg:mb-6"></div>
        <h2 className="text-lg lg:text-4xl mb-2 lg:mb-8 font-semibold">
          Welcome, {user.username ? user.username?.split(" ")[0] : "user"} 👍
        </h2>
        
          <div className="text-base lg:text-2xl mb-4">✓ Enrolled Course</div>
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-6 mt-5">
            {hasCourse
              ? enrolledCourse.map((course) => {
                  return (
                    <CourseCard
                      key={course.id}
                      src={course.src}
                      courseTitle={course.title}
                      courseDescrip={course.courseDiscription}
                      hasBtn={false}
                    />
                  );
                })
              : <p className="text-2xl font-semibold">No enrolled course yet.</p>}
          </div>

          <div className="text-base lg:text-2xl mt-4">✓ Progress</div>
        
      </div>
    </div>
  );
}

export default Dashboard;
