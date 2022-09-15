import Head from "next/head";
import Layout from "../components/layout";
import ItemThumbnail from "../components/ItemThumbnail";
import styles from "../styles/Home.module.css";
import data from "../public/Craft-Sewing-Patterns.json";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>The Stuff Project</title>
          <meta name="description" content="Catalog of all of our stuff!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.flexContainer}>
          {data.map((data, key) => (
            <ItemThumbnail key={key} name={data.SKU} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
