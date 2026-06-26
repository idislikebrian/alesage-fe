"use client";

import { useEffect, useState } from "react";
import styles from "./site.module.css";

export function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      return;
    }

    document.body.classList.add("lock");

    let frame = 0;
    let start = 0;
    const duration = 1300;

    const finish = () => {
      setCount(100);
      setDone(true);
      document.body.classList.remove("lock");
      window.setTimeout(() => setRemoved(true), 700);
    };

    const tick = (timestamp: number) => {
      if (!start) {
        start = timestamp;
      }

      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.round(progress * 100));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      } else {
        window.setTimeout(finish, 220);
      }
    };

    frame = window.requestAnimationFrame(tick);
    const safety = window.setTimeout(finish, 2600);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(safety);
      document.body.classList.remove("lock");
    };
  }, []);

  if (removed) {
    return null;
  }

  const formattedCount = count.toString().padStart(3, "0");

  return (
    <div className={`${styles.preloader} ${done ? styles.preloaderDone : ""}`}>
      <div className={styles.preloaderRow}>
        <span className={styles.label}>
          ALESAGE<sup className={styles.registeredMark}>®</sup> — Air-cooled Index
        </span>
        <span className={styles.label}>Manhasset, NY</span>
      </div>
      <div className={styles.preloaderCount}>{formattedCount}</div>
      <div className={styles.preloaderRow}>
        <span className={styles.label}>Loading specimen 01 / 05</span>
        <span className={styles.label}>Est. MMXXVI</span>
      </div>
    </div>
  );
}
