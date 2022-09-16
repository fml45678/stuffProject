import Head from "next/head";
import Layout from "../components/layout";
import ItemThumbnail from "../components/ItemThumbnail";
import styles from "../styles/Home.module.css";
import data from "../public/Craft-Sewing-Patterns.json";
import toyData from "../public/TOY.json";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>The Stuff Project</title>
          <meta name="description" content="Catalog of all of our stuff!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={styles.section}>CRAFT</h1>
        <div className={styles.flexContainer}>
          {data.map((data, key) => (
            <ItemThumbnail cat="CSP" key={key} img={data.SKU} />
          ))}
        </div>
        <h1 className={styles.section}>CRAFT</h1>
        <div className={styles.flexContainer}>
          {toyData.map((data, key) => (
            <ItemThumbnail cat="TOY" key={key} img={data.SKU} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
