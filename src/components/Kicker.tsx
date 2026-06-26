import styles from "./site.module.css";

type KickerProps = {
  number: string;
  eyebrow?: string;
  secondary?: string;
  dark?: boolean;
};

export function Kicker({ number, eyebrow, secondary, dark = false }: KickerProps) {
  return (
    <div className={styles.kicker}>
      <span className={styles.kickerNumber}>{number}</span>
      <div className={styles.kickerMeta}>
        {eyebrow ? (
          <span className={`${styles.label} ${dark ? styles.labelDark : ""}`}>{eyebrow}</span>
        ) : null}
        {secondary ? (
          <span className={`${styles.label} ${dark ? styles.labelDark : ""}`}>
            {secondary}
          </span>
        ) : null}
      </div>
    </div>
  );
}
