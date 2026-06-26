import styles from "./site.module.css";

type Corner = "tl" | "tr" | "bl" | "br";

const cornerClass: Record<Corner, string> = {
  tl: styles.markTopLeft,
  tr: styles.markTopRight,
  bl: styles.markBottomLeft,
  br: styles.markBottomRight,
};

type RegistrationMarksProps = {
  corners?: Corner[];
};

export function RegistrationMarks({
  corners = ["tl", "tr", "bl", "br"],
}: RegistrationMarksProps) {
  return corners.map((corner) => (
    <span
      aria-hidden="true"
      className={`${styles.registrationMark} ${cornerClass[corner]}`}
      key={corner}
    />
  ));
}
