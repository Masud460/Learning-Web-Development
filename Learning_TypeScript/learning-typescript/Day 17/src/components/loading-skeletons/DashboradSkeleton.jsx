import CourseCardSkeleton from "./CourseCardSkeleton";
function DashboardSkeleton({ coursesBox }) {
  return (
    <div className="flex-1 flex justify-center items-center animate-pulse relative">
      <div className="w-11/12 lg:w-3/5 absolute top-12 lg:top-8">
        {/* Dashboard Title */}
        <div className="h-7 lg:h-10 w-40 lg:w-64 bg-gray-300 rounded-md mx-auto"></div>

        {/* Divider */}
        <div className="w-full h-0.5 bg-gray-200 mt-2 mb-3 lg:mt-4 lg:mb-6"></div>

        {/* Welcome Text */}
        <div className="h-6 lg:h-10 w-56 lg:w-80 bg-gray-300 rounded-md mb-4 lg:mb-8"></div>

        {/* Enrolled Course Title */}
        <div className="h-5 lg:h-8 w-44 lg:w-40 bg-gray-300 rounded-md mb-3"></div>

        {/* Course Cards Skeleton (same as course skeleton card size) */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-6 mt-5">
          {/* Cards */}
          {coursesBox.length > 0
            ? coursesBox.map((i) => <CourseCardSkeleton hasBtn={false} key={i} />)
            : <div className="w-45 h-4 lg:w-70 lg:h-8 bg-gray-300 rounded-md"></div>}
        </div>

        {/* Progress Section */}
        <div className="mt-6">
          <div className="h-5 lg:h-8 w-32 lg:w-34 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardSkeleton;
