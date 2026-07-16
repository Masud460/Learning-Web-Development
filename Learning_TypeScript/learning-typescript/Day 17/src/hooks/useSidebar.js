import { useContext } from "react"
import { SidebarContext } from "../features/context/SidebarContext"

function useSidebar() {
    const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  return {isSidebarOpen, setIsSidebarOpen}
}

export default useSidebar