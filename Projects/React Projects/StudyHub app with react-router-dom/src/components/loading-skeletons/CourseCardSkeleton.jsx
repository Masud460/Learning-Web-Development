function CourseCardSkeleton({hasBtn}) {
  return (
    <div
      className="flex-1
       w-fit  p-3 lg:p-6 flex lg:flex-col justify-between items-center gap-8 lg:gap-3 bg-white rounded-md lg:rounded-2xl shadow-2xl shadow-gray animate-pulse"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-18 h-20 lg:w-20 lg:h-24 bg-gray-300 rounded-md"></div>
        <div className="h-4 lg:h-6 w-20 lg:w-30 bg-gray-300 rounded-md mt-3" />
        <div className="h-4 lg:h-8 w-20 lg:w-40 bg-gray-300 rounded-md mt-1 lg:hidden" />
      </div>

      <div className="hidden lg:block w-full h-[1px] bg-gray-200"></div>

      <div className="flex flex-col justify-center items-center gap-1 lg:mt-3">
        <div className="h-4 w-25 bg-gray-300 rounded-md lg:w-full" />
        <div className="h-4 w-35 bg-gray-300 rounded-md" />
        <div className="h-4 w-25 bg-gray-300 rounded-md lg:hidden" />
        <div className={`h-7 lg:h-8 w-30 lg:w-35 bg-gray-300 rounded-xl mt-3 ${hasBtn ? "block" : "hidden"}`} />
      </div>
    </div>
  );
}

export default CourseCardSkeleton;