function LoginSkeleton() {
  return (
    <div className="w-full h-[416px] lg:h-[716.44px] flex flex-col justify-center items-center relative animate-pulse">
      <div className="lg:w-6/13 lg:h-4/5 flex flex-col justify-center items-center absolute top-5 lg:top-0 w-full px-4">
        {/* Title Skeleton */}
        <div className="h-[28px] lg:h-[50px] w-56 lg:w-80 bg-gray-300 rounded-md mb-4"></div>

        {/* Divider Skeleton (only lg) */}
        <div className="lg:w-3/5 lg:bg-gray-300 lg:h-[1px] hidden lg:block mt-4 mb-6"></div>

        {/* Form Skeleton */}
        <div className="w-4/5 lg:w-7/10 flex flex-col gap-3 lg:gap-4 mt-2">
          {/* Username Input */}
          <div>
            <div className="h-4 lg:h-6 w-20 lg:w-40 bg-gray-300 rounded-md mb-1"></div>
            <div className="h-8 lg:h-14 w-full bg-gray-300 rounded-md"></div>
          </div>

          {/* Email Input */}
          <div>
            <div className="h-3 lg:h-6 w-20 lg:w-25 bg-gray-300 rounded-md mb-1"></div>
            <div className="h-8 lg:h-14 w-full bg-gray-300 rounded-md"></div>
          </div>

          {/* Password Input */}
          <div>
            <div className="h-3 lg:h-6 w-20 lg:w-30 bg-gray-300 rounded-md mb-1"></div>
            <div className="h-8 lg:h-14 w-full bg-gray-300 rounded-md"></div>
          </div>

          {/* Button */}
          <div className="h-8 lg:h-14 w-3/5 bg-gray-300 rounded-md mt-2 lg:mx-27"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginSkeleton;
