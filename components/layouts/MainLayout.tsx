import Head from "next/head";
import { FC, PropsWithChildren } from 'react';
import styles from "../../styles/MainLayout.module.css";
import Navbar from "../Navbar";

const MainLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Sergio</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
