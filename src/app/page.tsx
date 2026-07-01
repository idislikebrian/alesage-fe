import { CtaLink } from "@/components/CtaLink";
import { HomeVideo } from "@/components/HomeVideo";
import { Kicker } from "@/components/Kicker";
import { LedgerList } from "@/components/LedgerList";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import styles from "@/components/site.module.css";

const exhibitions = [
  {
    year: "2024",
    title: "Arsham 993A — mechanical rebuild",
    description:
      "Eight-month, nut-and-bolt restomod of a 1998 Carrera 2 S. Debuted at The Bridge, Hamptons.",
    tag: "Restoration",
  },
  {
    year: "2023",
    title: "Perrotin · “20 Years” — live build",
    description:
      "“Sculpture 3,” a 911 Carrera, assembled on the gallery floor across the run of the show.",
    tag: "Performance",
  },
  {
    year: "2023",
    title: "Morton Street · “Art Is The Process”",
    description:
      "A 911 Carrera 3.2 taken apart and put back together over three months. The origin of the name.",
    tag: "Exhibition",
  },
  {
    year: "2024",
    title: "“Art Is The Process” — the film",
    description:
      "Feature documentary of the 993A build. Premiered at SVA Theater, New York.",
    tag: "Film",
  },
];

const services = [
  {
    number: "i",
    title: "Restoration",
    description:
      "Preservation through concours. Bare-metal rebuilds, factory-correct or bespoke, documented frame by frame.",
    meta: "By consultation",
  },
  {
    number: "ii",
    title: "Maintenance",
    description:
      "Air-cooled service done properly — diagnosis, tuning, and the unglamorous work that keeps a car honest.",
    meta: "Scheduled · drop-in",
  },
  {
    number: "iii",
    title: "Objects",
    description:
      "Vetted components and a small line of goods from the bench. Each piece listed with its provenance.",
    meta: "The collection →",
  },
];

export default function Home() {
  return (
    <>
      <header className={styles.hero}>
        <HomeVideo />
        <div className={styles.heroGrid}>
          <div className={styles.heroTop}>
            <span className={styles.label}>Specimen No. AL-911-32</span>
            <span className={styles.label}>Index 00 — 40.7976°N / 073.7004°W</span>
          </div>
          <h1 className={styles.heroWord}>
            ALESAGE<sup className={styles.registeredMark}>®</sup>
          </h1>
          <div className={styles.heroLow}>
            <p className={styles.heroState}>
              Air-cooled Porsche, taken apart and put back as art.
            </p>
            <div className={styles.heroRight}>
              <p className={styles.heroLede}>
                An atelier and an archive for the air-cooled 911 — understood completely,
                documented in full, returned closer to itself than it arrived.
              </p>
              <div className={styles.heroMeta}>
                <span className={styles.label}>Restoration</span>
                <span className={styles.label}>Maintenance</span>
                <span className={styles.label}>Objects</span>
              </div>
              <CtaLink className={styles.heroCta} href="/visit">
                Book a consultation
              </CtaLink>
            </div>
          </div>
        </div>
      </header>

      <Section tone="ink">
        <Kicker
          dark
          number="01"
          eyebrow="The Premise"
          secondary="Air-cooled · 356 → 930"
        />
        <div className={styles.split}>
          <div>
            <p className={styles.lead}>
              A car is a city. Wiring, fuel, oil, air — every system holding up the next.
            </p>
          </div>
          <div className={styles.prose}>
            <p className={styles.proseStrong}>
              Alesage restores and maintains the air-cooled Porsche with the patience the work
              asks for and most shops cannot afford to give.
            </p>
            <p>
              The practice began in a gallery. Over three months, every component of a 1987
              Carrera 3.2 was removed by hand, laid out, studied, and returned to the car.
              Nothing was rushed and nothing was hidden. That exhibition gave the name to
              everything since: the assembly is the artwork, and the artwork is the assembly.
            </p>
            <p>
              What opens in Manhasset is the same discipline, made available — concours-grade
              restoration, honest maintenance, and a standard of documentation usually reserved
              for the archive.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="bone">
        <Kicker
          number="02"
          eyebrow="Exhibitions & Collaborations"
          secondary="Selected record"
        />
        <LedgerList items={exhibitions} />
        <div className={styles.ctaWrap}>
          <CtaLink href="/process">Read the process</CtaLink>
        </div>
      </Section>

      <Section tone="bone" compactTop>
        <Kicker number="03" eyebrow="The Atelier" secondary="What the shop does" />
        <h2 className={`${styles.h2} ${styles.h2Home}`}>Three kinds of work.</h2>
        <div className={styles.cards}>
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              meta={service.meta}
            >
              {service.description}
            </ServiceCard>
          ))}
        </div>
      </Section>
    </>
  );
}
