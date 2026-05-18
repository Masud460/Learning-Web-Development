import { Layout } from "../components";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../features/context/AuthContext";
import {SidebarProvider} from "../features/context/SidebarContext";

function App() {
  return (
    <>
      <SidebarProvider>
        <AuthProvider>
          <Layout>
            <Outlet />
          </Layout>
        </AuthProvider>
      </SidebarProvider>
    </>
  );
}

export default App;
