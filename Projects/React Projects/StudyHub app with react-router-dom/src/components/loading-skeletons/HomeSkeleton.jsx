function HomeSkeleton() {
  return (
    <div className="flex justify-center items-center bg-blue-100 w-full h-[calc(100%-4.5rem)] lg:h-[calc(100%-4.5rem)] animate-pulse">
      <div className="flex flex-col gap-3 lg:gap-6 items-center w-full h-4/5 lg:h-3/5">

        {/* Title skeleton */}
        <div className="w-[280px] h-[28px] lg:w-[640px] lg:h-[52px] bg-gray-300 rounded-md" />

        {/* Subtitle skeleton */}
        <div className="w-[220px] h-[22px] lg:w-[420px] lg:h-[40px] bg-gray-300 rounded-md" />

        {/* Button skeleton */}
        <div className="w-[140px] h-[46px] lg:w-[220px] lg:h-[60px] bg-gray-300 rounded-md" />

        {/* List skeleton */}
        <ul className="flex flex-col gap-2 mt-2">
          <li className="w-[180px] h-[20px] lg:w-[260px] lg:h-[28px] bg-gray-300 rounded-md" />
          <li className="w-[200px] h-[20px] lg:w-[300px] lg:h-[28px] bg-gray-300 rounded-md" />
          <li className="w-[160px] h-[20px] lg:w-[240px] lg:h-[28px] bg-gray-300 rounded-md" />
        </ul>

      </div>
    </div>
  );
}

export default HomeSkeleton;