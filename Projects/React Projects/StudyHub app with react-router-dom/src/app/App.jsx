import { Header } from "../components";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../features/context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Outlet />
      </AuthProvider>
    </>
  );
}

export default App;
