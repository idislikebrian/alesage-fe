import styles from "./site.module.css";

export function HomeVideo() {
  return (
    <video
      aria-label="A mechanic inspecting a Porsche component in the ALESAGE workshop"
      className={styles.homeVideo}
      autoPlay
      loop
      muted
      playsInline
      poster="/media/alesage-home-poster.jpg"
      preload="metadata"
    >
      <source src="/media/alesage-home-loop.mp4" type="video/mp4" />
    </video>
  );
}
