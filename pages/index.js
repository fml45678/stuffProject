import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>The Stuff Project</title>
          <meta name="description" content="Catalog of all of our stuff!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Hello Sworld</h1>
      </div>
    </Layout>
  );
}
