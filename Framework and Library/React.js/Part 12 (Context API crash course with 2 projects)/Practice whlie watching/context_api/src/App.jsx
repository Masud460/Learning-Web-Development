import FormFill from "./components/FormFill";
import Profile from "./components/Profile";
import UserContextProvider from "./features/auth/context/UserContextProvider";
function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col justify-center items-center w-full h-full bg-[#212121] text-white font-semibold">
        <FormFill />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
