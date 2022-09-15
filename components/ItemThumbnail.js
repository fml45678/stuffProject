import React from "react";
import styles from "./ItemThumbnail.module.css";

function ItemThumbnail(props) {
  return <div className={styles.itemContainer}>{props.name}</div>;
}

export default ItemThumbnail;
