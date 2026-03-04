import CourseCardSkeleton from "./CourseCardSkeleton";

function CoursesSkeleton({coursesBox}) {
  return (
    <div className="w-full lg:h-[calc(100%-4.5rem)] flex flex-col bg-[#f5f5f5] justify-center items-center relative">
      <div className="lg:w-3/5 lg:h-4/5 flex flex-col justify-center items-center absolute top-3 animate-pulse">
        <div className="h-7 lg:h-14 w-42 lg:w-96 bg-gray-300 rounded-md mb-2"></div>
        <div className="h-5 w-66 bg-gray-300 rounded-md mb-1.5"></div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-6 mt-5">
          {coursesBox.map((i) => (
            <CourseCardSkeleton hasBtn={true} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesSkeleton;