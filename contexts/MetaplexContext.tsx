import React, { createContext, ReactNode, useContext, useMemo } from "react";
import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import { useWallet } from "@solana/wallet-adapter-react";
// custom
import { useSolana } from "./SolanaContext";

// type of context
type metaplexContextType = {
  metaplex: Metaplex;
};
// initialize context
const MetaplexContext = createContext<metaplexContextType | undefined>(undefined);

// hook for context
export function useMetaplex() {
  const metaplexContext = useContext(MetaplexContext);
  if (!metaplexContext) throw new Error("No MetaplexContext.Provider found.");
  return metaplexContext;
}

// provider for context
export function MetaplexProvider({ children }: { children: ReactNode }) {
  const { connection } = useSolana();
  const wallet = useWallet();
  // initialize global metaplex object with current wallet
  // it's available because this provider is a child of Solana Provider
  const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet));

  const value: metaplexContextType = {
    metaplex,
  };

  return <MetaplexContext.Provider value={value}>{children}</MetaplexContext.Provider>;
}
