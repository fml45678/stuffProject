import React from "react";
import styles from "./ItemThumbnail.module.css";

function ItemThumbnail(props) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.img} src={`/images/CSP/${props.img}.JPG`} alt="" />
    </div>
  );
}

export default ItemThumbnail;
