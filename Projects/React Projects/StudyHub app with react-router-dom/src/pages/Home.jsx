import { Link } from "react-router-dom";
import { useLoading } from "../hooks";
import { HomeSkeleton } from "../components";

function Home() {
  const loading = useLoading(500)
  
  if (loading) {
  return <HomeSkeleton />
}
  return (
    <div
      className='flex-1 flex justify-center items-center bg-blue-100 w-full'
    >
      <div
        className="
          flex flex-col gap-3 lg:gap-6  items-center w-full
        "
      >
      <h1 className="text-2xl lg:text-4xl font-semibold ">Learn Smarter with StudyHub</h1>
      <h3 className="text-lg lg:text-2xl">Master Web Dev Step by Step</h3>
      <Link to='/courses' className='text-base px-4 lg:px-6 lg:text-lg text-white bg-blue-500 rounded-md py-3 font-semibold'>Browse Courses</Link>
      <ul className="lg:text-lg">
        <li>✓ Beginner Friendly</li>
        <li>✓ Practical Learning</li>
        <li>✓ Real Projects</li>
        </ul>
        </div>
    </div>
  )
}

export default Home;