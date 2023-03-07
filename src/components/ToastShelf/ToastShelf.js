import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ list, dismissToast }) {
  return (
    <ol className={styles.wrapper}>
      {list.map((item) => (
        <li className={styles.toastWrapper} key={item.id}>
          <Toast variant={item.variant} onClose={dismissToast} id={item.id}>
            {item.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
