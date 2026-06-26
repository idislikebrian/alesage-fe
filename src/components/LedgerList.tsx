import styles from "./site.module.css";

type LedgerItem = {
  year: string;
  title: string;
  description: string;
  tag: string;
};

type LedgerListProps = {
  items: LedgerItem[];
};

export function LedgerList({ items }: LedgerListProps) {
  return (
    <div className={styles.ledger}>
      {items.map((item) => (
        <div className={styles.ledgerRow} key={`${item.year}-${item.title}`}>
          <span className={styles.year}>{item.year}</span>
          <span className={styles.ledgerTitle}>{item.title}</span>
          <span className={styles.ledgerDescription}>{item.description}</span>
          <span className={styles.ledgerTag}>{item.tag}</span>
        </div>
      ))}
    </div>
  );
}
