import Head from "next/head";
import Layout from "../components/layout";
import ItemThumbnail from "../components/ItemThumbnail";
import styles from "../styles/Home.module.css";
import patternData from "../public/data/Craft-Sewing-Patterns.json";
import toyData from "../public/data/TOY.json";
import speakersData from "../public/data/Electric-Audio-Speakers.json";
import multiData from "../public/data/Electric-Device-Multi.json";
import phonesData from "../public/data/Electric-Device-Phones.json";
import screensData from "../public/data/Electric-Device-Screens.json";
import keyboardsData from "../public/data/Electronics-Computer-Keyboards.json";

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
          {patternData.map((data, key) => (
            <ItemThumbnail cat="CSP" key={key} img={data.SKU} />
          ))}
        </div>
        <h1 className={styles.section}>TOY</h1>
        <div className={styles.flexContainer}>
          {toyData.map((data) => (
            <ItemThumbnail cat="TOY" key={data.SKU} img={data.SKU} />
          ))}
        </div>
        <h1 className={styles.section}>Speakers</h1>
        <div className={styles.flexContainer}>
          {speakersData.map((data) => (
            <ItemThumbnail cat="EAS" key={data.SKU} img={data.SKU} />
          ))}
        </div>
        <h1 className={styles.section}>Multi</h1>
        <div className={styles.flexContainer}>
          {multiData.map((data) => (
            <ItemThumbnail cat="EDM" key={data.SKU} img={data.SKU} />
          ))}
        </div>
        <h1 className={styles.section}>Phones</h1>
        <div className={styles.flexContainer}>
          {phonesData.map((data) => (
            <ItemThumbnail cat="EDP" key={data.SKU} img={data.SKU} />
          ))}
        </div>
        <h1 className={styles.section}>Screens</h1>
        <div className={styles.flexContainer}>
          {screensData.map((data) => (
            <ItemThumbnail cat="EDS" key={data.SKU} img={data.SKU} />
          ))}
        </div>
        <h1 className={styles.section}>Keyboards</h1>
        <div className={styles.flexContainer}>
          {keyboardsData.map((data) => (
            <ItemThumbnail cat="ECK" key={data.SKU} img={data.SKU} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
