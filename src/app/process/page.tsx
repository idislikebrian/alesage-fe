import { Kicker } from "@/components/Kicker";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { Section } from "@/components/Section";
import { TierList } from "@/components/TierList";
import styles from "@/components/site.module.css";

const projectSteps = [
  {
    number: "01",
    title: "Intake",
    description:
      "The car is assessed, photographed, and a scope is written before a single bolt is touched. You approve the plan, not a surprise.",
  },
  {
    number: "02",
    title: "Teardown",
    description:
      "Disassembly is documented in full. Every part is catalogued, evaluated, and sorted — reuse, restore, or replace with provenance.",
  },
  {
    number: "03",
    title: "The work",
    description:
      "Mechanical, body, paint, interior — carried to the agreed standard, from a preservation refresh to a concours rebuild.",
  },
  {
    number: "04",
    title: "Record",
    description:
      "The car returns to itself, and you receive the archive: images, parts log, and decisions, start to finish.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Section tone="bone">
        <Kicker number="P" eyebrow="Process" secondary="The method · the maker · the film" />
        <h1 className={`${styles.h2} ${styles.h2Process}`}>
          Take it apart to know it. Put it back to prove you did.
        </h1>
        <div className={styles.film}>
          <MediaPlaceholder
            ariaLabel="Reserved for film still"
            className={styles.filmFrame}
            label="▶ Film still — “Art Is The Process”"
            description="[ swap: opening frame, 993A engine bay or title card ]"
          />
        </div>
      </Section>

      <Section tone="ink">
        <div className={styles.split}>
          <div>
            <h2 className={`${styles.h3} ${styles.h3Process}`}>
              Self-taught, out of Queens. A mechanic who kept turning up in galleries.
            </h2>
          </div>
          <div className={styles.prose}>
            <p className={styles.proseStrong}>
              Greg Anagnostopoulos learned the air-cooled 911 the way you learn a language you
              intend to live inside — completely, and without a manual on the bench.
            </p>
            <p>
              That fluency is why artists call. The collaboration with Daniel Arsham turned
              restoration into something a room of people would stand and watch: a car coming
              apart and back together as a performance, the workshop made visible.
            </p>
            <p>
              Alesage carries that visibility into a working atelier. Owners are given the access
              the gallery audience had — to see the work, understand each decision, and know
              exactly what was done to their car, and why.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="bone">
        <Kicker
          number="P2"
          eyebrow="The Disassembly, Knolled"
          secondary="Documented in full"
        />
        <h2 className={`${styles.h3} ${styles.h3Media}`}>
          Every car is photographed the way the gallery car was. Laid out, labelled, accounted
          for.
        </h2>
        <div className={styles.mediaTwo}>
          <MediaPlaceholder
            ariaLabel="Reserved for knolling photograph"
            label="Knolling — full teardown"
            description="[ swap: overhead, a disassembled 911, parts aligned ]"
          />
          <MediaPlaceholder
            ariaLabel="Reserved for detail photograph"
            label="Detail — hands at work"
            description="[ swap: close crop, engine internals or paint ]"
          />
        </div>
      </Section>

      <Section tone="bone" compactTop>
        <Kicker number="P3" eyebrow="How a project runs" secondary="Four stages" />
        <TierList items={projectSteps} />
      </Section>
    </>
  );
}
