// external
import { ReactNode } from "react";
// custom
import { ConfigProvider } from "./ConfigContext";
import { MetaplexProvider } from "./MetaplexContext";
import { SolanaProvider } from "./SolanaContext";
import { ToastProvider } from "./ToastContext";

export function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <ConfigProvider>
        <SolanaProvider>
          <MetaplexProvider>{children}</MetaplexProvider>
        </SolanaProvider>
      </ConfigProvider>
      <ToastProvider />
    </>
  );
}

export default ContextProvider;
