import type { Product } from "@/components/ProductGrid";
import { Kicker } from "@/components/Kicker";
import { ProductGrid } from "@/components/ProductGrid";
import { Section } from "@/components/Section";
import styles from "@/components/site.module.css";

const parts: Product[] = [
  {
    label: "911 110 965",
    placeholder: "[ part photo ]",
    title: "Air Flow Meter",
    price: "$1,000",
    detail: "911 110 965",
    type: "Part · rebuilt",
  },
  {
    label: "911 110 967 X",
    placeholder: "[ part photo ]",
    title: "Fuel Distributor",
    price: "$2,250",
    detail: "911 110 967 X",
    type: "Part · reman.",
  },
  {
    label: "Fuchs 16″",
    placeholder: "[ part photo ]",
    title: "Fuchs Wheels",
    price: "Inquire",
    detail: "Set of four",
    type: "Part · refinished",
  },
];

const goods: Product[] = [
  {
    label: "Specimen Tee",
    placeholder: "[ apparel photo ]",
    title: "Specimen No. AL-01",
    price: "$60",
    detail: "100% cotton",
    type: "Apparel",
  },
  {
    label: "Plate 01",
    placeholder: "[ print photo ]",
    title: "Knolled & Numbered",
    price: "$45",
    detail: "Archival print",
    type: "Print · ed.",
  },
  {
    label: "Teardown Log",
    placeholder: "[ object photo ]",
    title: "Teardown Log 001",
    price: "$30",
    detail: "First edition",
    type: "Object · zine",
  },
];

export default function ShopPage() {
  return (
    <Section tone="bone">
      <Kicker number="04" eyebrow="The Collection" secondary="Objects & parts with provenance" />
      <div className={styles.shopHead}>
        <h1 className={`${styles.h2} ${styles.h2Shop}`}>Objects from the bench.</h1>
        <p className={`${styles.note} ${styles.shopNote}`}>
          Each part listed with condition, fitment, and origin. Goods produced in small runs.
          Built to be driven. Or framed. Or both.
        </p>
      </div>

      <p className={styles.columnLabel}>Parts</p>
      <div className={styles.goodsSpaced}>
        <ProductGrid products={parts} />
      </div>

      <p className={styles.columnLabel}>Goods</p>
      <ProductGrid products={goods} />

      <p className={`${styles.note} ${styles.catalogueNote}`}>
        Demo collection — checkout runs on the existing Shopify backend, restyled to match. Real
        inventory and pricing to be confirmed.
      </p>
    </Section>
  );
}
