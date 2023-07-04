import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const YourApp = () => {
  return;
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>UI369 Front End</title>
        <meta content="A template for web3 front end apps" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />
        <p
          className={styles.description}
          style={{ textAlign: "center", marginTop: "1em", fontSize: "3em" }}
        >
          UI369 Front End
        </p>
        <p className={styles.description} style={{ textAlign: "center" }}>
          Front end template
        </p>
      </main>
    </div>
  );
};

export default Home;
