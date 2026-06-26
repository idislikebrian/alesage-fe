import Link from "next/link";
import styles from "./site.module.css";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/process", label: "Process" },
  { href: "/shop", label: "Objects" },
  { href: "/visit", label: "Visit" },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerWord}>
              ALESAGE<sup className={styles.registeredMark}>®</sup>
            </div>
            <p className={styles.footerSign}>Built to be driven. Or judged. Or both.</p>
          </div>
          <div className={styles.footerColumn} aria-label="Footer index">
            <h2>Index</h2>
            {footerLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className={styles.footerColumn}>
            <h2>Atelier</h2>
            <p>55 Myrtle St</p>
            <p>Manhasset, NY 11030</p>
            <a href="mailto:hello@alesageny.com">hello@alesageny.com</a>
            <p className={styles.footerHours}>Tue–Sat · 9–6</p>
          </div>
        </div>
        <div className={styles.footerBase}>
          <span>
            © MMXXVI Alesage<sup className={styles.registeredMark}>®</sup> — all rights
            reserved
          </span>
          <span className={styles.draft}>Concept MVP — design preview, not final copy</span>
          <span>Air-cooled only</span>
        </div>
      </div>
    </footer>
  );
}
