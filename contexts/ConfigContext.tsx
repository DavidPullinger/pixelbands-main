import { createContext, useContext, ReactNode } from "react";

// type of context
type configContextType = {
  api_url: string;
};
// initialize context
const ConfigContext = createContext<configContextType | undefined>(undefined);

// hook for context
export function useConfig() {
  const configContext = useContext(ConfigContext);
  if (!configContext) throw new Error("No ConfigContext.Provider found.");
  return configContext;
}

// provider for context
export function ConfigProvider({ children }: { children: ReactNode }) {
  const value = {
    api_url: "https://pixelbands-api.herokuapp.com",
  };
  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
}
