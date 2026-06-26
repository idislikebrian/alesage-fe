import type { ReactNode } from "react";
import styles from "./site.module.css";

type SectionProps = {
  children: ReactNode;
  compactTop?: boolean;
  tone: "ink" | "bone";
};

export function Section({ children, compactTop = false, tone }: SectionProps) {
  const toneClass = tone === "ink" ? styles.sectionInk : styles.sectionBone;

  return (
    <section
      className={`${styles.section} ${toneClass} ${compactTop ? styles.sectionCompactTop : ""}`}
    >
      <div className={styles.wrap}>{children}</div>
    </section>
  );
}
