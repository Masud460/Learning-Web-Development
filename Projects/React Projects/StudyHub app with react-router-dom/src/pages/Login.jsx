import { LoginForm } from "../features";
import { useLoading } from "../hooks";
import { LoginSkeleton } from "../components";

function Login() {
  const loading = useLoading(500);

  if (loading) {
    return <LoginSkeleton />;
  }
  return (
    <div className="w-full h-[416px] lg:h-[716.44px] flex flex-col justify-center items-center relative">
      <div className="lg:w-3/5 lg:h-4/5 flex flex-col justify-center items-center absolute top-5 lg:top-0">
        <h1 className="text-2xl lg:text-4xl font-semibold mb-3">
          Login to StudyHub
        </h1>
        <div className="lg:w-3/5 lg:bg-gray-400 lg:h-[1px] hidden lg:block mt-4 mb-6"></div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
