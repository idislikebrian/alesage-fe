import styles from "./site.module.css";

type ServiceCardProps = {
  number: string;
  title: string;
  children: string;
  meta: string;
};

export function ServiceCard({ number, title, children, meta }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.cardNumber}>{number}</span>
      <h3>{title}</h3>
      <p>{children}</p>
      <span className={styles.cardMeta}>{meta}</span>
    </article>
  );
}
