import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex-1 w-full flex flex-col gap-6 justify-center items-center ">
      <div className="lg:w-2/5 lg:h-3/5 relative">
      <h1 className="text-2xl mt-6 font-semibold absolute top-4 right-30">😓 404 - Page not found</h1>
        <Link to='/' className='text-white bg-blue-500 rounded-md py-3 font-semibold text-lg px-4 absolute top-24 right-42'>
        Go Back Home
        </Link>
        </div>
    </div>
  );
}

export default Error;
