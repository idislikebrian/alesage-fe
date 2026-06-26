import { RegistrationMarks } from "./RegistrationMarks";
import styles from "./site.module.css";

type MediaPlaceholderProps = {
  label: string;
  description: string;
  ariaLabel: string;
  className?: string;
};

export function MediaPlaceholder({
  label,
  description,
  ariaLabel,
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`${styles.mediaPlaceholder} ${className}`}
      role="img"
      aria-label={ariaLabel}
    >
      <RegistrationMarks />
      <div className={styles.placeholderGrid} />
      <div className={styles.placeholderTag}>
        <div className={styles.placeholderLabel}>{label}</div>
        <div className={styles.placeholderDescription}>{description}</div>
      </div>
    </div>
  );
}
