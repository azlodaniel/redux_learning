import React, { useEffect } from "react";
import detailsSlice from "./detailsSlice";
import styles from "../counter/Counter.module.css";

export function Details(props) {
  const { reducerManager } = props;

  useEffect(() => {
    reducerManager.add("details", detailsSlice);
  }, [reducerManager]);

  return (
    <div className={styles.row}>
      <button
        className={styles.asyncButton}
        onClick={() => {
          reducerManager.add("addAmount", detailsSlice);
        }}
      >
        Add reducer
      </button>
      <button
        className={styles.button}
        onClick={() => {
          reducerManager.remove("addAmount", detailsSlice);
        }}
      >
        Remove reducer
      </button>
    </div>
  );
}
