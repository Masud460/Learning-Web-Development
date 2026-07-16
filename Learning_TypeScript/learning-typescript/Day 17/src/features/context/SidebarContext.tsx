import { createContext, useState } from "react";

const SidebarContext = createContext();
function SidebarProvider({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return(
        <SidebarContext.Provider value={{isSidebarOpen, setIsSidebarOpen}}>{ children }</SidebarContext.Provider>
    )
}

export { SidebarProvider, SidebarContext };