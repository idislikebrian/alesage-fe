import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { Preloader } from "@/components/Preloader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import styles from "@/components/site.module.css";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "ALESAGE® — Air-cooled Porsche, restored as art · Manhasset, NY",
  description:
    "ALESAGE. Air-cooled Porsche restoration and maintenance as a discipline — an atelier and an archive. Manhasset, New York. Built to be driven. Or judged. Or both.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${plexMono.variable}`}
    >
      <body>
        <div className={styles.pageShell}>
          <Preloader />
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
