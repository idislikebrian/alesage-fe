import type { ReactNode } from "react";
import styles from "./site.module.css";

type Fact = {
  label: string;
  value: ReactNode;
};

type FactListProps = {
  facts: Fact[];
  dark?: boolean;
};

export function FactList({ facts, dark = false }: FactListProps) {
  return (
    <div className={`${styles.facts} ${dark ? styles.factsDark : ""}`}>
      {facts.map((fact) => (
        <div className={styles.fact} key={fact.label}>
          <span className={styles.factKey}>{fact.label}</span>
          <span className={styles.factValue}>{fact.value}</span>
        </div>
      ))}
    </div>
  );
}
