import CourseCardSkeleton from "./CourseCardSkeleton";
function DashboardSkeleton({ coursesBox }) {
  return (
    <div className="flex justify-center items-center h-[416px] lg:h-[716.44px] animate-pulse">
      <div className="w-11/12 lg:w-3/5 h-4/5">
        {/* Dashboard Title */}
        <div className="h-[28px] lg:h-[52px] w-40 lg:w-64 bg-gray-300 rounded-md mx-auto"></div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-gray-200 mt-2 mb-3 lg:mt-4 lg:mb-6"></div>

        {/* Welcome Text */}
        <div className="h-[22px] lg:h-[40px] w-56 lg:w-96 bg-gray-300 rounded-md mb-4 lg:mb-8"></div>

        {/* Enrolled Course Title */}
        <div className="h-[18px] lg:h-[32px] w-44 lg:w-72 bg-gray-300 rounded-md mb-3"></div>

        {/* Course Cards Skeleton (same as course skeleton card size) */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-6 mt-5">
          {/* Cards */}
          {coursesBox.length > 0
            ? coursesBox.map((i) => <CourseCardSkeleton hasBtn={false} key={i} />)
            : <div className="lg:w-70 lg:h-8 bg-gray-300 rounded-md"></div>}
        </div>

        {/* Progress Section */}
        <div className="mt-6">
          <div className="h-[18px] lg:h-[32px] w-32 lg:w-56 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardSkeleton;
