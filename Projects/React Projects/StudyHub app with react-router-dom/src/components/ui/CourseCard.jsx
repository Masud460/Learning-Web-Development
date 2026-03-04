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
        <img className="w-[120px] lg:w-[130px]" src={src} />
        <h2 className="font-semibold m-2 text-center lg:text-2xl lg:font-semibold">
          {courseTitle}
        </h2>
      </div>
      <div className="hidden lg:block w-full h-[1px] bg-gray-200"></div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="mb-3 lg:mt-1.5 font-medium text-center">
          {courseDescrip}
        </h2>
        <button
          onClick={enrollHandler}
          className={`${hasBtn ? 'block' : 'hidden'} ${
            isEnrolled ? "bg-green-600" : "bg-blue-600"
          }  text-white py-2 px-10 lg:px-16 font-semibold lg:text-[20px] rounded-md mt-2 cursor-pointer lg:rounded-2xl hover:${
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
