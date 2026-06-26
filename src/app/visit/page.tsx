import { CtaLink } from "@/components/CtaLink";
import { FactList } from "@/components/FactList";
import { Kicker } from "@/components/Kicker";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { Section } from "@/components/Section";
import { TierList } from "@/components/TierList";
import styles from "@/components/site.module.css";

const visitFacts = [
  {
    label: "Address",
    value: (
      <>
        55 Myrtle St
        <br />
        Manhasset, NY 11030
      </>
    ),
  },
  {
    label: "Hours",
    value: (
      <>
        Mon–Fri · 8–6
        <br />
        Consultations by appointment
      </>
    ),
  },
  {
    label: "Contact",
    value: <a href="mailto:hello@alesageny.com">hello@alesageny.com</a>,
  },
];

const workTiers = [
  {
    number: "A",
    title: "Preservation",
    description:
      "Keep an honest car honest. Sympathetic maintenance and conservation that protects originality and value.",
  },
  {
    number: "B",
    title: "Driver",
    description:
      "Sorted, reliable, and good to look at. Mechanical health and cosmetics brought up without chasing concours points.",
  },
  {
    number: "C",
    title: "Concours",
    description:
      "Factory-correct to the bolt. A documented bare-metal restoration built to be judged — and to win.",
  },
  {
    number: "D",
    title: "Restomod",
    description:
      "Old soul, modern nerve. A bespoke build that blends period character with the upgrades you actually want.",
  },
];

export default function VisitPage() {
  return (
    <>
      <Section tone="bone">
        <Kicker number="05" eyebrow="Visit" secondary="Manhasset, New York" />
        <div className={styles.visitGrid}>
          <div>
            <h1 className={`${styles.h2} ${styles.h2Visit}`}>
              Bring the car. Or the question.
            </h1>
            <p className={styles.visitIntro}>
              Restoration begins with a conversation, not a quote. Book a consultation and we
              will walk the car together before anything is promised.
            </p>
            <CtaLink href="mailto:hello@alesageny.com">Book a consultation</CtaLink>
            <FactList facts={visitFacts} />
          </div>
          <div>
            <MediaPlaceholder
              ariaLabel="Reserved for atelier or map image"
              className={styles.shopMap}
              label="The Atelier · Manhasset"
              description="[ swap: storefront / interior, or a styled map of the location ]"
            />
          </div>
        </div>
      </Section>

      <Section tone="bone" compactTop>
        <Kicker number="V2" eyebrow="Scope & Standard" secondary="Four levels" />
        <h2 className={styles.h2}>Levels of work.</h2>
        <div className={styles.tiersTight}>
          <TierList items={workTiers} />
        </div>
      </Section>
    </>
  );
}
