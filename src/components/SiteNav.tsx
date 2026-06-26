"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./site.module.css";

const navItems = [
  { href: "/process", label: "Process" },
  { href: "/shop", label: "Objects" },
  { href: "/visit", label: "Visit" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Primary">
      <Link className={styles.brand} href="/" aria-label="ALESAGE - home">
        ALESAGE<sup className={styles.registeredMark}>®</sup>
      </Link>
      <div className={styles.navlinks}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={`${styles.navlink} ${isActive ? styles.navlinkActive : ""}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <span className={`${styles.navMeta} ${styles.label}`}>Air-cooled only</span>
    </nav>
  );
}
