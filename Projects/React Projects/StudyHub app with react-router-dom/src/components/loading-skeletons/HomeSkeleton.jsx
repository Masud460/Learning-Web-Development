function HomeSkeleton() {
  return (
    <div className="flex-1 flex justify-center items-start py-30 lg:py-0 lg:items-center bg-blue-100 w-full animate-pulse">
      <div className="flex flex-col gap-3 lg:gap-6 items-center w-full">

        {/* Title skeleton */}
        <div className="w-60 h-8 lg:w-160 lg:h-13 bg-gray-300 rounded-md" />
        <div className="w-35 h-8 lg:w-160 lg:h-13 bg-gray-300 rounded-md" />

        {/* Subtitle skeleton */}
        <div className="w-55 h-5.5 lg:w-105 lg:h-10 bg-gray-300 rounded-md" />

        {/* Button skeleton */}
        <div className="w-40 h-10 lg:w-55 lg:h-15 bg-gray-300 rounded-md" />

        {/* List skeleton */}
        <ul className="flex flex-col gap-2 mt-2">
          <li className="w-35 h-5 lg:w-65 lg:h-7 bg-gray-300 rounded-md" />
          <li className="w-42 h-5 lg:w-75 lg:h-7 bg-gray-300 rounded-md" />
          <li className="w-35 h-5 lg:w-60 lg:h-7 bg-gray-300 rounded-md" />
        </ul>

      </div>
    </div>
  );
}

export default HomeSkeleton;