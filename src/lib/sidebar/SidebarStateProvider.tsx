import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SidebarStateContext, SidebarToggleContext } from "./SidebarContext";

export type SidebarProviderProps = React.PropsWithChildren<{}>;

export const SidebarStateProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const { pathname } = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <SidebarStateContext.Provider value={isSidebarOpen}>
      <SidebarToggleContext.Provider value={toggleSidebar}>
        {children}
      </SidebarToggleContext.Provider>
    </SidebarStateContext.Provider>
  );
};
