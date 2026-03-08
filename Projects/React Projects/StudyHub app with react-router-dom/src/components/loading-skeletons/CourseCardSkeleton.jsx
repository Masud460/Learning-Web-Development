function CourseCardSkeleton({hasBtn}) {
  return (
    <div
      className="w-5/6 lg:w-75 p-3 lg:p-6 flex lg:flex-col justify-between items-center gap-8 lg:gap-3 bg-white rounded-md lg:rounded-2xl shadow-2xl shadow-gray animate-pulse"
    >
      <div className="lg:flex lg:flex-col justify-center items-center">
        <img className="w-30 h-23 lg:w-[130px] lg:h-[130px] bg-gray-300 rounded-md" />
        <div className="h-6 lg:h-8 w-24 lg:w-40 bg-gray-300 rounded-md mt-3" />
        <div className="h-6 lg:h-8 w-24 lg:w-40 bg-gray-300 rounded-md mt-1 lg:hidden" />
      </div>

      <div className="hidden lg:block w-full h-[1px] bg-gray-200"></div>

      <div className="flex flex-col justify-center items-center gap-2 lg:mt-3">
        <div className="h-4 w-50 bg-gray-300 rounded-md" />
        <div className="h-4 w-34 bg-gray-300 rounded-md lg:hidden" />
        <div className="h-4 w-22 bg-gray-300 rounded-md lg:hidden" />
        <div className={`h-10 w-32 lg:w-40 bg-gray-300 rounded-md mt-3 ${hasBtn ? "block" : "hidden"}`} />
      </div>
    </div>
  );
}

export default CourseCardSkeleton;