import Header from "./Header"
import { useSidebar } from "../../hooks";
function Layout({ children }) {
  const { setIsSidebarOpen } = useSidebar();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main onClick={()=> setIsSidebarOpen(false)} className="flex-1 flex">
        {children}
      </main>
    </div>
  )
}
export default Layout