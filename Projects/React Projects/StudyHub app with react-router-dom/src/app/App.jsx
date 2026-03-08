import { Layout } from "../components";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../features/context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Layout>
          <Outlet />
        </Layout>
      </AuthProvider>
    </>
  );
}

export default App;
