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
import keyboardsData from "../public/data/Electric-Computer-Keyboards.json";

const titleAndCodes = [
  { title: "CRAFT", code: "CSP", file: patternData },
  { title: "TOY", code: "TOY", file: toyData },
  { title: "SPEAKERS", code: "EAS", file: speakersData },
  { title: "MULTI", code: "EDM", file: multiData },
  { title: "PHONES", code: "EDP", file: phonesData },
  { title: "SCREENS", code: "EDS", file: screensData },
  { title: "KEYBOARDS", code: "ECK", file: keyboardsData },
];

export default function Home() {
  const section = titleAndCodes.map((title, key) => (
    <div key={key}>
      <h1 key={title.code} className={styles.section}>
        {title.title}
      </h1>
      <div key={key} className={styles.flexContainer}>
        {title.file.map((data) => (
          <ItemThumbnail cat={title.code} key={data.SKU} img={data.SKU} />
        ))}
      </div>
    </div>
  ));

  return (
    <Layout>
      <div>
        <Head>
          <title>The Stuff Project</title>
          <meta name="description" content="Catalog of all of our stuff!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>{section}</div>
      </div>
    </Layout>
  );
}
