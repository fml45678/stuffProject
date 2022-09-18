import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <header className={styles.flexHeader}>
        <span className={styles.title}>
          LEMIEUX STUDIOS <br /> INVENTORY
        </span>

        <ul className={styles.categories}>
          <li className={styles.dropDown}>
            ELECTRONICS
            <div>
              <ul className={styles.subMenu}>
                <li>Audio</li>
                <li>Devices</li>
                <li>Computer</li>
              </ul>
            </div>
          </li>
          <li className={styles.dropDown}>
            CRAFT
            <div>
              <ul className={styles.subMenu}>
                <li>Patterns</li>
                <li>Sewing</li>
                <li>Tools</li>
              </ul>
            </div>
          </li>
          <li className={styles.dropDown}>
            JUNK
            <div>
              <ul className={styles.subMenu}>
                <li>Stuff</li>
              </ul>
            </div>
          </li>
          <li className={styles.dropDown}>
            THINGS
            <div>
              <ul className={styles.subMenu}>
                <li>Toy</li>
              </ul>
            </div>
          </li>
        </ul>
      </header>
      <div className={styles.searchContainer}>
        <input className={styles.searchBar} placeholder="SEARCH" type="text" />
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
