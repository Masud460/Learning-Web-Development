function CourseCard({
  src,
  courseTitle,
  courseDescrip,
  isEnrolled,
  enrollHandler,
  id,
  hasBtn
}) {
  return (
    <div
      id={id}
      className="w-5/6 lg:w-75 p-3 lg:p-6 flex lg:flex-col justify-between items-center gap-8 lg:gap-3 bg-white rounded-md lg:rounded-2xl shadow-2xl shadow-gray"
    >
      <div className="lg:flex lg:flex-col justify-center items-center">
        <img className="w-30 lg:w-18" src={src} />
        <h2 className="font-semibold m-1 text-center lg:text-lg lg:font-semibold">
          {courseTitle}
        </h2>
      </div>
      <div className="hidden lg:block w-full h-[1px] bg-gray-200"></div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="mb-2 lg:mt-1 font-medium text-center">
          {courseDescrip}
        </h2>
        <button
          onClick={enrollHandler}
          className={`${hasBtn ? 'block' : 'hidden'} ${
            isEnrolled ? "bg-green-600" : "bg-blue-600"
          }  text-white py-1 px-10 lg:px-12 font-semibold lg:text-lg rounded-md mt-1 cursor-pointer lg:rounded-2xl hover:${
            isEnrolled ? "bg-green-700" : "bg-blue-700"
          } transition-colors duration-500`}
        >
          {isEnrolled ? "Enrolled" : "Enroll"}
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
