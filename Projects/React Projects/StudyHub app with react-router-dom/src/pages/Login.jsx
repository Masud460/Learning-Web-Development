import { LoginForm } from "../features";
import { useLoading } from "../hooks";
import { LoginSkeleton } from "../components";

function Login() {
  const loading = useLoading(3000);

  if (loading) {
    return <LoginSkeleton />;
  }
  return (
    <div className="flex-1 w-full flex flex-col justify-center items-center relative">
      <div className="lg:w-3/5 flex flex-col justify-center items-center absolute top-15 lg:top-5 ">
        <h1 className="text-2xl lg:text-4xl font-semibold mb-2">
          Login to StudyHub
        </h1>
        <div className="lg:w-3/5 lg:bg-gray-400 lg:h-[1px] hidden lg:block mt-4 mb-6"></div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
