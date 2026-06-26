import styles from "./site.module.css";

type Tier = {
  number: string;
  title: string;
  description: string;
};

type TierListProps = {
  items: Tier[];
};

export function TierList({ items }: TierListProps) {
  return (
    <div className={styles.tiers}>
      {items.map((item) => (
        <div className={styles.tier} key={item.title}>
          <span className={styles.tierNumber}>{item.number}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
