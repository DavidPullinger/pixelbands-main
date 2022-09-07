import React, { createContext, ReactNode, useContext, useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { CoinbaseWalletAdapter, GlowWalletAdapter, PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl, Connection } from "@solana/web3.js";

// type of context
type solanaContextType = {
  network: WalletAdapterNetwork;
  endpoint: string;
  connection: Connection;
};
// initialize context
const SolanaContext = createContext<solanaContextType | undefined>(undefined);

// hook for context
export function useSolana() {
  const solanaContext = useContext(SolanaContext);
  if (!solanaContext) throw new Error("No SolanaContext.Provider found.");
  return solanaContext;
}

// provider for context
export function SolanaProvider({ children }: { children: ReactNode }) {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const connection = new Connection(endpoint);
  const wallets = useMemo(
    () => [
      new CoinbaseWalletAdapter(),
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SolflareWalletAdapter({
        network,
      }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  const value: solanaContextType = {
    network,
    endpoint,
    connection,
  };

  return (
    <SolanaContext.Provider value={value}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </SolanaContext.Provider>
  );
}
