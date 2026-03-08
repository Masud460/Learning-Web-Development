function LoginSkeleton() {
  return (
    <div className="flex-1 w-full flex flex-col justify-center items-center relative animate-pulse">
      <div className="lg:w-3/5 flex flex-col justify-center items-center absolute top-15 lg:top-5 w-full md:px-4">
        {/* Title Skeleton */}
        <div className="h-[32px] lg:h-[45px] w-56 lg:w-80 bg-gray-300 rounded-md mb-2"></div>

        {/* Divider Skeleton (only lg) */}
        <div className="w-3/5 bg-gray-300 h-[1px] hidden lg:block mt-4 mb-6"></div>

        {/* Form Skeleton */}
        <div className="w-full flex flex-col justify-center items-center">
          {/* Username Input */}
          <div>
            <div className="h-4 lg:h-6 w-20 lg:w-30 bg-gray-300 rounded-md mb-1"></div>
            <div className="h-8 lg:h-10 bg-gray-300 py-1 lg:py-1.5 px-4 rounded-md w-68 lg:w-100 mb-3"></div>
          </div>

          {/* Email Input */}
          <div>
            <div className="h-4 lg:h-6 w-20 lg:w-22 bg-gray-300 rounded-md mb-1"></div>
            <div className="h-8 lg:h-10 bg-gray-300 py-1 lg:py-1.5 px-4 rounded-md w-68 lg:w-100 mb-3"></div>
          </div>

          {/* Password Input */}
          <div>
            <div className="h-4 lg:h-6 w-20 lg:w-25 bg-gray-300 rounded-md mb-1"></div>
            <div className="h-8 lg:h-10 bg-gray-300 py-1 lg:py-1.5 px-4 rounded-md w-68 lg:w-100 mb-3"></div>
          </div>

          {/* Button */}
          <div className="h-10 lg:h-12 w-68 bg-gray-300 rounded-md mt-2 lg:mt-3 lg:mx-27"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginSkeleton;
