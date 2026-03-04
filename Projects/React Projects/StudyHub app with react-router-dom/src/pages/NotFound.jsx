import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="w-full h-[416px] lg:h-[716.44px] flex flex-col gap-6 justify-center items-center ">
      <div className="lg:w-2/5 lg:h-3/5 relative">
      <h1 className="text-3xl mt-6 font-semibold absolute top-4 right-45">😓 404 - Page not found</h1>
        <Link to='/' className='text-white bg-blue-500 rounded-md py-3 font-semibold text-2xl px-4 absolute top-24 right-60'>
        Go Back Home
        </Link>
        </div>
    </div>
  );
}

export default Error;
