import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./site.module.css";

type CtaLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export function CtaLink({ children, className = "", href }: CtaLinkProps) {
  const isInternal = href.startsWith("/");
  const classes = `${styles.cta} ${className}`;
  const content = (
    <>
      {children} <span className={styles.arrow}>→</span>
    </>
  );

  if (isInternal) {
    return (
      <Link className={classes} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <a className={classes} href={href}>
      {content}
    </a>
  );
}
