import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <header className={styles.flexHeader}>
        <span className={styles.title}>
          LEMIEUX STUDIOS <br /> INVENTORY
        </span>

        <ul className={styles.categories}>
          <li className={styles.electronics}>
            ELECTRONICS
            <div>
              <ul className={styles.subMenu}>
                <li>Audio</li>
                <li>Devices</li>
                <li>Computer</li>
              </ul>
            </div>
          </li>
          <li>CRAFT</li>
          <li>JUNK</li>
          <li>THINGS</li>
        </ul>
      </header>
      <div className={styles.searchContainer}>
        <input className={styles.searchBar} placeholder="SEARCH" type="text" />
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
