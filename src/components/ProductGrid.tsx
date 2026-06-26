import { RegistrationMarks } from "./RegistrationMarks";
import styles from "./site.module.css";

export type Product = {
  label: string;
  placeholder: string;
  title: string;
  price: string;
  detail: string;
  type: string;
};

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className={styles.goods}>
      {products.map((product) => (
        <ProductCard key={product.title} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className={styles.good}>
      <div className={styles.productMedia}>
        <RegistrationMarks corners={["tl", "br"]} />
        <div className={styles.placeholderTag}>
          <div className={styles.placeholderLabel}>{product.label}</div>
          <div className={styles.placeholderDescription}>{product.placeholder}</div>
        </div>
        <div className={styles.viewOverlay}>View</div>
      </div>
      <div className={styles.goodBody}>
        <div className={styles.productTopline}>
          <h3>{product.title}</h3>
          <span className={styles.price}>{product.price}</span>
        </div>
        <div className={styles.productSubline}>
          <span className={styles.partNumber}>{product.detail}</span>
          <span className={styles.productType}>{product.type}</span>
        </div>
      </div>
    </article>
  );
}
