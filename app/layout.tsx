export const metadata = {
  title: "UI369 Front End",
  description: "A Web3 enabled website",
};

import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitSiweNextAuthProvider } from "@rainbow-me/rainbowkit-siwe-next-auth";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppProps } from "next/app";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, goerli, mainnet, optimism, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    optimism,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [
    jsonRpcProvider({ rpc: () => ({ http: "https://rpc.ankr.com/optimism" }) }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "UI369 Front End",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
