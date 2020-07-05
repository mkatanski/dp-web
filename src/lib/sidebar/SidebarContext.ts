import { createContext } from "react";

export type SidebarStateContextProps = boolean;

export type SidebarToggleContextProps = () => void;

export const SidebarStateContext = createContext<SidebarStateContextProps>(
  false
);

export const SidebarToggleContext = createContext<SidebarToggleContextProps>(
  () => null
);
